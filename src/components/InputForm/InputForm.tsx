import {
    ActionButton,
    Flex,
    Text,
    TextArea,
    View,
} from "@adobe/react-spectrum";
import AddCircle from "@spectrum-icons/workflow/AddCircle";
import KeyValue from "components/KeyValue";
import Toggle from "components/Toggle";
import isJSON from "components/utils/isJSON";
import React, { FC, useEffect, useState } from "react";

type Actions = "UPDATE" | "DELETE";

interface InputFormProps {
    headersInfo: JSONObject;
    setHeadersInfo: StateSetter<JSONObject>;
}

const InputForm: FC<InputFormProps> = ({ headersInfo, setHeadersInfo }) => {
    const [index, setIndex] = useState<number>(0);
    const [bulk, setBulk] = useState<boolean>(false);
    const [bulkText, setBulkText] = useState<string>("");
    const [headers, setHeaders] = useState<DynamicElements>({});
    const [isBulkValid, setIsBulkValid] = useState<"valid" | "invalid">();

    const updateJSON = (newEntry: JSONObject, action = "UPDATE" as Actions) => {
        if (action === "UPDATE") {
            setHeadersInfo({ ...headersInfo, ...newEntry });
        }
    };

    const onBulkBlur = () => {
        if (bulkText === "") {
            setIsBulkValid(undefined);
        }
        if (isJSON(bulkText)) {
            setIsBulkValid("valid");
            setHeadersInfo(JSON.parse(bulkText));
        } else {
            setIsBulkValid("invalid");
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
                width="100%"
                paddingTop="size-0"
                marginBottom="size-150"
            >
                <h2>Headers [optional]</h2>
                {!bulk && (
                    <>
                        {Object.keys(headers).map(
                            headerIndex => headers[parseInt(headerIndex)],
                        )}

                        <Flex justifyContent="center" marginBottom="size-200">
                            <ActionButton
                                marginTop="size-200"
                                onPress={() => setIndex(index + 1)}
                            >
                                <AddCircle />
                                <Text>Add headers</Text>
                            </ActionButton>
                        </Flex>
                    </>
                )}
                {bulk && (
                    <Flex justifyContent="center" marginBottom="size-200">
                        <TextArea
                            validationState={isBulkValid}
                            label="Headers (JSON)"
                            width="size-6000"
                            value={bulkText}
                            onChange={setBulkText}
                            onBlur={onBulkBlur}
                        />
                    </Flex>
                )}
                <Toggle
                    labels={{
                        on: "Bulk Headers (JSON)",
                        off: "Individual Headers",
                    }}
                    defaultValue={bulk}
                    setSelected={setBulk}
                />
            </View>
        </Flex>
    );
};
export default InputForm;
