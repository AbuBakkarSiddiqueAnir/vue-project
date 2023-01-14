
export const request = {}

request.get = async (path) => {
    try {
        const responseData = await fetch(path)
        console.log(responseData)

    } catch (e) {
        console.error(e)
    }
}