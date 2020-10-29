$(function() {
    $("#input_id").autocomplete({
        source: async function (request, response) {
            let fields = [];
            let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            let token = "89b19bcf7c55116fe8a9a4c79f6e23dd62b11075";
            let query = $("#input_id").val();

            let options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({query: query})
            }

            let json = await fetch(url, options).json();

            json.suggestions.forEach(obj => {
                fields.push(obj.value)
            })

            response(fields);
        },
        minLength: 3
    });
});