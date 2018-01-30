showDemo = (req, res) => {
    let html = `<iframe
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/eeb5b0ac-d083-4257-92c5-d2a2471105ed">
    </iframe>`

    res.send(html);
}

module.exports = {
    showDemo
};


