const formatDate = (data) => {
    return data.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export default formatDate;
