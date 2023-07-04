let survey_options = document.getElementById('survey_options');
let add_fields = document.getElementById('add_fields');
let remove_fields = document.getElementById('remove_fields');

add_fields.onclick = function () {
    let newFields = document.createElement('input');
    newFields.setAttribute('type', 'text');
    newFields.setAttribute('name', 'survey_options[]');
    newFields.setAttribute('class', 'survey_options');
    newFields.setAttribute('size', '50');
    newFields.setAttribute('placeholder', 'Another Fields');

    survey_options.appendChild(newFields);
}

remove_fields.onclick = function () {
    let input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}