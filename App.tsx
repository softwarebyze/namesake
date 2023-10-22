import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Input,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  Center,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1}>
        <Box>
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={false}
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="password"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be at least 6 characters.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      </Center>
    </GluestackUIProvider>
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
