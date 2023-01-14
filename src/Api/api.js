
export const request = {}

request.get = async (path) => {
    try {
        const response = await fetch(path)

        if (response.status === 200 ) {
            return  await response.json();
        } else {
          return false;
        }

    } catch (e) {
        console.error(e)
    }
}