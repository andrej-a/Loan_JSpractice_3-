export const postDataFormToServer = async function (url, target) {

    const result = await fetch(url, {
        method: "POST",
        body: target
    });

    return await result;
};