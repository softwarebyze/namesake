import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Input,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputField,
  Center,
  Button,
  ButtonText,
  Heading,
  Text,
} from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
export default function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState<string[]>([]);
  useLayoutEffect(() => {
    const getInitialNames = async () => {
      const storedNames = await AsyncStorage.getItem("names");
      setNames(storedNames ? JSON.parse(storedNames) : []);
    };
    getInitialNames();
  }, []);

  const saveName = async (name: string) => {
    if (!name) return;
    const newNames = [...names, name];
    setNames(newNames);
    await AsyncStorage.setItem("names", JSON.stringify(newNames));
    setName("");
  };

  return (
    <GluestackUIProvider {...{config}}>
      <Center flex={1}>
        <Heading sx={{ mb: "$4" }}>Namesake</Heading>
        <Box>
          <Form {...{name, setName, saveName}} />
          <NamesList {...{names}} />
        </Box>
      </Center>
    </GluestackUIProvider>
  );
}

function Form({
  name,
  setName,
  saveName,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  saveName: (name: string) => void;
}) {
  return (
    <Box>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Name</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            onChangeText={setName}
            value={name}
            type="text"
            placeholder="Zack Ebenfeld"
          />
        </Input>
      </FormControl>
      <FormControl sx={{ mt: "$2" }}>
        <Button onPress={() => saveName(name)}>
          <ButtonText>Save Name</ButtonText>
        </Button>
      </FormControl>
    </Box>
  );
}

function NamesList({ names }: { names: string[] }) {
  return (
    <Box sx={{ mt: "$4" }}>
      {names.map((name, id) => (
        <Box key={id} sx={{ mb: "$2" }}>
          <Text>{name}</Text>
        </Box>
      ))}
    </Box>
  );
}

<Box flex={1} backgroundColor="$black">
  <ScrollView
    style={{ height: "100%" }}
    contentContainerStyle={{ flexGrow: 1 }}
  >
    <Box
      position="absolute"
      sx={{
        "@base": {
          h: 500,
          w: 500,
        },
        "@lg": {
          h: 700,
          w: 700,
        },
      }}
    ></Box>
  </ScrollView>
</Box>;
