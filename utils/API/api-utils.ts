// This function ensures API responses match an expected structure (prevents errors from unexpected data).
export function validateApiResponse<T>(
    data: any,
    schema: Record<string, string>
): data is T {
    return Object.keys(schema).every((key) => typeof data[key] === schema[key]);
}

/**Example usage:
 * 
const userSchema = {
    id: "number",
    name: "string",
    email: "string"
};

axios.get("https://api.example.com/user")
    .then(response => {
        if (validateApiResponse<typeof userSchema>(response.data, userSchema)) {
            console.log("Valid response:", response.data);
        } else {
            console.error("Invalid response!");
        }
    });
 */