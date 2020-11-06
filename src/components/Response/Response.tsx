import {
    Flex,
    Item,
    Picker,
    ProgressCircle,
    View,
} from "@adobe/react-spectrum";
import ErrorMessage from "components/ErrorMessage";
import React, { FC, useState } from "react";
import ReactJson from "react-json-view";

interface ResponseProps {
    data: Record<string, any>;
    loading: boolean;
    error?: boolean;
}

const Response: FC<ResponseProps> = ({ loading, error, data }) => {
    const everything = "EVERYTHING";
    const [filter, setFilter] = useState<string>(everything);

    if (loading) {
        return (
            <Flex justifyContent="center" marginTop="size-200">
                <ProgressCircle aria-label="Loading…" isIndeterminate />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex justifyContent="center" marginTop="size-200">
                <ErrorMessage />
            </Flex>
        );
    }

    if (Object.keys(data).length > 0) {
        const filters = [{ name: everything }];

        Object.keys(data).forEach(key => {
            const tempKey = { name: key };
            filters.push(tempKey);
        });

        return (
            <Flex justifyContent="center">
                <View
                    borderWidth="thin"
                    borderColor="dark"
                    borderRadius="medium"
                    padding="size-250"
                    paddingTop="size-0"
                    width="100%"
                >
                    <h2>Response</h2>
                    <Picker
                        label="Filter schemas"
                        items={filters}
                        onSelectionChange={e => setFilter(e.toString())}
                    >
                        {item => <Item key={item.name}>{item.name}</Item>}
                    </Picker>
                    {filter !== everything && (
                        <View marginTop="size-300">
                            <h3>Active filter: {filter}</h3>
                        </View>
                    )}
                    <View marginTop="size-200">
                        <ReactJson
                            src={filter === everything ? data : data[filter]}
                            name={null}
                            displayDataTypes={false}
                        />
                    </View>
                </View>
            </Flex>
        );
    }
    return <></>;
};
export default Response;
