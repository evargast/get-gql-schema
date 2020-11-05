import { getIntrospectionQuery } from "gql-string-to-object";
import fetch from "isomorphic-fetch";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getSchema = async (url: string, headers?: JSONObject) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
    });

    const { data } = await response.json();

    return data.__schema;
};

export default getSchema;
