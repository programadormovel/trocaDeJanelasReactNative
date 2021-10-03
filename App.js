import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const JanelaInicial = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Janela Inicial</Text>
      <Button
        title="Vai para nova janela"
        onPress={
          () => navigation.navigate("Nova", 
          { nome: 'Adriano', idade: 18 })
        }
      ></Button>
    </View>
  );
};

const NovaJanela = ({ route, navigation }) => {
  const {nome, idade} = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nova Janela</Text>
      <Text>Nome recebido: {JSON.stringify(nome)}</Text>
      <Text>Idade recebida: {JSON.stringify(idade)}</Text>
      <Button
        title="Ir para Nova Janela...de novo!"
        onPress={() => navigation.push("Nova", {idade: Math.ceil(Math.random() * 44)})}
      />
      <Button
        title="Ir para Inicial"
        onPress={() => navigation.navigate("Inicial")}
      />
      <Button
        title="Voltar para a janela Anterior"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Voltar para a primeira janela"
        onPress={() => navigation.popToTop()}
      />

      <TextInput onChangeText={(valor)=>navigation.setParams({nome:valor})} 
        style={{borderWidth:2, borderColor:'black'}} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={{ headerTitle: "Nome do Projeto" }}
      >
        <Stack.Screen name="Inicial" component={JanelaInicial} />
        <Stack.Screen
          name="Nova"
          component={NovaJanela}
          options={{ title: "Janela Nova Criada"}} 
          initialParams={{nome:'Nome qualquer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
