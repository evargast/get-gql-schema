import {
    defaultTheme,
    Provider as ProviderV3,
    View,
} from "@adobe/react-spectrum";
import InputForm from "components/InputForm";
import URLField from "components/URLField";
import React, { FC, useState } from "react";

import "./App.css";

const App: FC = () => {
    const [url, setURL] = useState<string>("");

    return (
        <ProviderV3 theme={defaultTheme} colorScheme={"light"} height="100vh">
            <View paddingTop="size-400">
                <h1 className="App">Get your GQL Schema!</h1>
            </View>

            <InputForm />
            <URLField setURL={setURL} />
        </ProviderV3>
    );
};

export default App;
