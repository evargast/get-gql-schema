import {
    defaultTheme,
    Flex,
    Provider as ProviderV3,
    View,
} from "@adobe/react-spectrum";
import InputForm from "components/InputForm";
import Response from "components/Response";
import Settings from "components/Settings";
import URLField from "components/URLField";
import getSchema from "components/utils/getSchema";
import { schemaToObject } from "gql-string-to-object";
import React, { FC, useEffect, useState } from "react";

import "./App.css";

const App: FC = () => {
    const [url, setURL] = useState<string>("");
    const [headersInfo, setHeadersInfo] = useState<JSONObject>(
        {} as JSONObject,
    );
    const [data, setData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>();
    const [hideEnums, setHideEnums] = useState<boolean>(true);
    const [hideTypes, setHideTypes] = useState<boolean>(false);

    useEffect(() => {
        if (url !== "") {
            setLoading(true);
            getSchema(url, headersInfo)
                .then(response => {
                    setData(schemaToObject(response, "", hideTypes, hideEnums));
                    setLoading(false);
                    setError(false);
                })
                .catch(() => {
                    // eslint-disable-next-line no-console
                    console.error("Oh noes, something went wrong");
                    setLoading(false);
                    setError(true);
                });
        }
    }, [url, hideTypes, hideEnums]);

    return (
        <ProviderV3 theme={defaultTheme} colorScheme={"light"}>
            <View height="100%">
                <View paddingTop="size-400">
                    <h1 className="App">Get your GQL Schema!</h1>
                </View>
                <Flex
                    direction="column"
                    gap="size-200"
                    marginX="auto"
                    width="size-6000"
                >
                    <InputForm
                        headersInfo={headersInfo}
                        setHeadersInfo={setHeadersInfo}
                    />
                    <URLField setURL={setURL} />
                    <Settings
                        hideEnums={hideEnums}
                        hideTypes={hideTypes}
                        setHideEnums={setHideEnums}
                        setHideTypes={setHideTypes}
                    />
                    <Response data={data} loading={loading} error={error} />
                </Flex>
            </View>
        </ProviderV3>
    );
};

export default App;
