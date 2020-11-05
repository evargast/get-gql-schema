import { ActionButton, Flex, Text, View } from "@adobe/react-spectrum";
import AddCircle from "@spectrum-icons/workflow/AddCircle";
import KeyValue from "components/KeyValue";
import React, { FC, useEffect, useState } from "react";

type Actions = "UPDATE" | "DELETE";
const InputForm: FC = () => {
    const [index, setIndex] = useState(0);
    const [headers, setHeaders] = useState<DynamicElements>({});
    const [headersInfo, setHeadersInfo] = useState<JSONObject>(
        {} as JSONObject,
    );

    const updateJSON = (newEntry: JSONObject, action = "UPDATE" as Actions) => {
        if (action === "UPDATE") {
            setHeadersInfo({ ...headersInfo, ...newEntry });
        }
    };

    useEffect(() => {
        if (index >= 1) {
            const tempHeader: DynamicElements = {};
            tempHeader[index] = <KeyValue key={index} setJSON={updateJSON} />;
            setHeaders({ ...headers, ...tempHeader });
        }
    }, [index]);

    return (
        <Flex justifyContent="center">
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                padding="size-250"
                paddingTop="size-0"
                width="size-6000"
            >
                <div>
                    <h2>Headers [optional]</h2>
                    {Object.keys(headers).map(
                        headerIndex => headers[parseInt(headerIndex)],
                    )}
                </div>

                <Flex justifyContent="center">
                    <ActionButton
                        marginTop="size-200"
                        onPress={() => setIndex(index + 1)}
                    >
                        <AddCircle />
                        <Text>Add headers</Text>
                    </ActionButton>
                </Flex>
            </View>
        </Flex>
    );
};
export default InputForm;
