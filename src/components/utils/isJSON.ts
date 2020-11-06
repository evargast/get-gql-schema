const isJSON = (input: string): boolean => {
    try {
        JSON.parse(input);
    } catch (e) {
        return false;
    }
    return true;
};

export default isJSON;
