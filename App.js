import React, { useState } from "react";
import {View,Text,TextInput,Switch,Image,TouchableOpacity,StyleSheet,ScrollView,Modal,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function MotoSelectionApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [selectedMoto, setSelectedMoto] = useState("Honda CG 160");
  const [paymentMethod, setPaymentMethod] = useState("À Vista");
  const [budget, setBudget] = useState(15000);
  const [preference, setPreference] = useState(5);
  const [insurance, setInsurance] = useState(false);
  const [helmetIncluded, setHelmetIncluded] = useState(false);
  const [emergencyKit, setEmergencyKit] = useState(false);
  const [phoneHolder, setPhoneHolder] = useState(false);


  const [motoPickerVisible, setMotoPickerVisible] = useState(false);
  const [paymentPickerVisible, setPaymentPickerVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha Sua Nova Moto</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Telefone" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Localização" value={location} onChangeText={setLocation} />

      <TouchableOpacity style={styles.selectBox} onPress={() => setMotoPickerVisible(true)}>
        <Text style={styles.selectText}>{selectedMoto}</Text>
      </TouchableOpacity>

      <Modal visible={motoPickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.pickerContainer}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <View style={styles.modalIndicator} />
            </View>
            <Picker
              selectedValue={selectedMoto}
              onValueChange={(itemValue) => {
                setSelectedMoto(itemValue);
                setMotoPickerVisible(false);
              }}
            >
              <Picker.Item label="Honda CG 160" value="Honda CG 160" />
              <Picker.Item label="Yamaha Fazer 250" value="Yamaha Fazer 250" />
              <Picker.Item label="BMW G 310 R" value="BMW G 310 R" />
              <Picker.Item label="Kawasaki Z400" value="Kawasaki Z400" />
              <Picker.Item label="Kawasaki Z1000" value="Kawasaki Z1000" />
            </Picker>
            <TouchableOpacity style={styles.closeButton} onPress={() => setMotoPickerVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.selectBox} onPress={() => setPaymentPickerVisible(true)}>
        <Text style={styles.selectText}>{paymentMethod}</Text>
      </TouchableOpacity>

      <Modal visible={paymentPickerVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.pickerContainer}>
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <View style={styles.modalIndicator} />
            </View>
            <Picker
              selectedValue={paymentMethod}
              onValueChange={(itemValue) => {
                setPaymentMethod(itemValue);
                setPaymentPickerVisible(false);
              }}
            >
              <Picker.Item label="À Vista" value="À Vista" />
              <Picker.Item label="Financiado" value="Financiado" />
            </Picker>
            <TouchableOpacity style={styles.closeButton} onPress={() => setPaymentPickerVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text>Orçamento: R${budget}</Text>
      <Slider minimumValue={8000} maximumValue={50000} step={1000} value={budget} onValueChange={setBudget} style={styles.slider} />

      <Text>Preferência: {preference}</Text>
      <Slider minimumValue={1} maximumValue={10} step={1} value={preference} onValueChange={setPreference} style={styles.slider} />

      <View style={styles.switchContainer}>
        <Text>Capacete incluso:</Text>
        <Switch value={helmetIncluded} onValueChange={setHelmetIncluded} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Kit emergencia:</Text>
        <Switch value={emergencyKit} onValueChange={setEmergencyKit} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Suporte de Celular:</Text>
        <Switch value={phoneHolder} onValueChange={setPhoneHolder} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Seguro:</Text>
        <Switch value={insurance} onValueChange={setInsurance} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert("Moto Escolhida: " + selectedMoto)}>
        <Text style={styles.buttonText}>Confirmar Escolha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert("Orçamento Ajustado: R$" + budget)}>
        <Text style={styles.buttonText}>Ajustar Orçamento</Text>
      </TouchableOpacity>

      <Image source={{ uri: "https://www.motoo.com.br/fotos/2018/7/960_720/honda_cg-160_2018_1_09072018_2094_960_720.jpg" }} style={styles.image} />
      <Image source={{ uri: "https://up.yimg.com/ib/th?id=OIP.Q7qlqtfGqbVVIl-2W76ZOAAAAA&pid=Api&rs=1&c=1&qlt=95&w=156&h=104" }} style={styles.image} />
      <Image source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.LqMbtXTthmSujRpfNM9ZhgHaE7&pid=Api&P=0&h=180" }} style={styles.image} />
      <Image source={{ uri: "https://s1.cdn.autoevolution.com/images/moto_gallery/KAWASAKI-Z1000-ABS-6810_4.jpg" }} style={styles.image} />
      <Image source={{ uri: "https://s2.glbimg.com/_RNFaEWuXxkDiqj5RFVD6JAmUOA=/0x0:565x427/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/k/z/CYoCchSdOM00kbC4W2lA/yamahafazer250-3.jpg" }} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    borderRadius: 5,
  },
  selectBox: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  selectText: {
    fontSize: 16,
    color: "#333",
  },
  slider: {
    width: "100%",
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  pickerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  modalIndicator: {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});
