const moment = require('moment');
const path = require('path');
const fs = require('fs-extra');

var Util = {}

Util.excelSequence = function () {
    let abjads = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr = abjads;
    let char = 0;
    let num = 26;
    for (let x = 2; x < 15; x++) {
        let idx = 0;
        for (let i = 1; i <= 26; i++) {
            arr[num] = abjads[char] + abjads[idx];
            idx++;
            num++;
        }
        char++;
    }

    return arr;
}

Util.capitalizeWord = function (string) {
    return string.split(" ").map(m => m[0].toUpperCase() + m.substr(1)).join(" ");
}

Util.capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Util.asyncWrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}

Util.capitalizeAfterSpace = function (str) {
    str = Util.replaceAll(str, "_", " ");
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

Util.capitalizeAfterSpaceTitle = function (str) {
    str = Util.replaceAll(str, " ", "_");
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

Util.now = function () {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
}

Util.nowShort = function () {
    return moment(new Date()).format("YYYY-MM-DD");
}

Util.dateSql = function (date, format) {
    format = format || "YYYY-MM-DD";
    if (date && date != "0000-00-00")
        return moment(date).format(format);
    else
        return '';
}

Util.timePublic = function (date) {
    if (date)
        return moment(date).format("DD MMM YYYY");
    else
        return '';
}

Util.timeSql = function (date) {
    if (date)
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
    else
        return '';
}

Util.getDate = function (date) {
    date = date + "" || "";
    if (date != "") {
        var explode = date.split("-");
        return {
            year: parseInt(explode[0]),
            month: parseInt(explode[1]),
            date: parseInt(explode[2]),
        }
    } else {
        return {
            year: 0,
            month: 0,
            date: 0
        }
    }
}

Util.dateIsBetween = (compare, start, end) => {
    if(compare == "" || compare == "0000-00-00"){
        return false;
    }
    var compare = moment(compare).format("YYYY-MM-DD");
    var start = moment(start).format("YYYY-MM-DD");
    var end = moment(end).format("YYYY-MM-DD");

    var today = moment(compare);
    var startDate = moment(start);
    var endDate = moment(end);

    console.log(today);
    console.log(startDate);
    console.log(endDate);

    return today.isBetween(startDate, endDate);
}

Util.getMonth = function (date) {
    if (date.length > 5) {
        var n = new Date(date)
        var m = n.getMonth();
        return parseInt(m) + 1;
    }
    return 0;
}

Util.getYear = function (date) {
    date = Util.dateSql(date) || "";
    console.log(date)
    return date.slice(0, 4);
}

//first is smaller than second
Util.calculateDay = function (from, to) {
    var a = moment(from);
    var b = moment(to);
    return b.diff(a, 'days') + 1;
}


Util.tableArray = function (arr) {
    var r = [];
    var tables = arr[0];
    for (var i = 0; i < tables.length; i++) {
        for (var obj in tables[i]) {
            r.push(tables[i][obj]);
        }
    }

    return r;
}

/*
 table array in sql to arr table name
 only for generator
 */
Util.tableArrayToObj = (arr) => {
    return arr.map(m => Object.values(m)[0]);
}

Util.escapeRegExp = function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

Util.validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/*
 Replace All like str_replace in PHP
 example : Util.replaceAll("abd","a","")
 */

Util.replaceAll = function (str, find, replace) {
    str = str || '';
    var t = ''
    if (Array.isArray(find)) {
        t = str;
        for (var i = 0; i < find.length; i++) {
            if (str.indexOf(find[i]) > -1) {
                t = str.replace(new RegExp(Util.escapeRegExp(find[i]), 'g'), replace);
                //console.log(t)
            }
        }

    } else {
        t = str.replace(new RegExp(Util.escapeRegExp(find), 'g'), replace);
    }

    return t;
}

Util.phoneFixed = function (str) {
    var ret = ''
    str = Util.replaceAll(str, ' ', '')
    var phone = str.trim()
    phone = Util.replaceAll(phone, '-', '')
    var first = phone.charAt(0)

    if (first == '') {
        ret = '';
    } else if (first == '+') {
        ret = phone;
    } else if (first == '0') {
        ret = '+62' + phone.replace('0', '');
    } else {
        ret = '+' + phone
    }

    return ret;
}


Util.phoneWA = function (str) {
    str = str || "";
    if (str == "") return "";

    var ret = ''
    str = Util.replaceAll(str, ' ', '')
    var phone = str.trim()
    phone = Util.replaceAll(phone, '-', '')
    phone = Util.replaceAll(phone, '+', '')

    var first = phone.charAt(0)

    if (first == '') {
        ret = '';
    } else if (first == '0') {
        ret = phone.replace('0', '62');
    } else {
        ret = phone
    }

    return ret;
}

Util.jsonSuccess = function (message) {
    message = message || 'Data saved...';
    var json = {type: 'success', status: 1, title: 'Success', message: message}

    return json;
}

Util.flashError = function (message, errors) {
    errors = errors || [];
    message = message || "Data not found!";
    var json = {type: 'error', status: 0, title: 'Error', message: message, errors: errors}

    return json;
}

Util.jsonError = function (path, message) {
    var json = {}
    json.errorLog = 1;
    json.type = 'error';
    json.status = 0;
    json.title = path + ' Error!';
    json.message = message;
    json.errors = [{path: path, message: message}]

    return json;
}

Util.arrayToObject = (array, keyField, isInteger = false) =>
    array.reduce((obj, item) => {
            var name = item[keyField] == null ? 'xxxxxx' : item[keyField] == 'null' ? 'xxxxxx' :  isInteger ? item[keyField] : item[keyField] + "";
            obj[name] = item;
            return obj
        }, {}
    );

//chase id:1,name:'test' t0 {1:'test'}
Util.modulesSwitch = (arr) => {
    let stores = [];
    stores.push({id: '', name: ''});
    arr.forEach((ar, index) => {
        stores.push({id: index, name: ar})
    });
    return stores;
}


Util.buildArrayObjectPrefix = function (arr) {
    return Util.modulesSwitch(arr);
}

Util.arrayWithObject = (array, key, field) =>
    array.reduce((obj, item) => {
        obj[item[key]] = item[field];
        return obj;
    }, {});

/*
 for movedupload file using single file
 */
Util.moveFile = function (buffer, filename) {
    return new Promise(function (resolve, reject) {
        buffer.mv(filename, function (err) {
            if (err) {
                reject(err)
            } else {
                console.log(filename)
                resolve(filename)
            }
        });
    });
}

Util.generateUnique = function (length, charset) {
    var random = Util.generate(length, charset);
    var uid = (new Date().valueOf()).toString(36)

    return uid + random;
}


/*
 generate random string 8
 */
Util.random = function (length) {
    length = length || 5;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
Util.whitelist = function () {
    return ['www', 'app', 'my', 'sintret', 'https', 'https'];
}

Util.convertDate = function (d) {
    d = d.trim()
    var myarr = d.split(" ");

    return myarr[2] + '-' + Util.monthConvert(myarr[1]) + '-' + myarr[0];
}

Util.month = function () {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}

Util.monthConvert = function (month) {
    var t = Util.month();
    var index = t.indexOf(month) + 1;
    if (index < 10) {
        return '0' + index
    } else {
        return index;
    }
}

// get string start from to
Util.cut = function (text, start, end) {
    return text.substr(start, end)
}

Util.getFormattedDate = function (date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return year + '-' + month + '-' + day + ' ' + time;
}

Util.uniqueId = function () {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

Util.typePaperSize = [
    {title: "F4", description: "FOLIO", width: 215, height: 330},
    {title: "LEGAL", description: "LEGAL", width: 216, height: 356},
    {title: "LETTER", description: "LETTER", width: 216, height: 279},
    {title: "A3", description: "A3", width: 297, height: 420},
    {title: "A4", description: "A4", width: 210, height: 297},
    {title: "A5", description: "A5", width: 148, height: 210},
    {title: "A6", description: "A6", width: 105, height: 148},
    {title: "A7", description: "A7", width: 74, height: 105},
    {title: "A8", description: "A8", width: 52, height: 74},
    {title: "A9", description: "A9", width: 37, height: 52},
    {title: "CUSTOM", description: "CUSTOM", width: 105, height: 148},
]

Util.typeFont = [
    'Verdana, Geneva, sans-serif',
    '"Times New Roman", Times, serif',
    'Georgia, serif',
    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    'Arial, Helvetica, sans-serif',
    '"Arial Black", Gadget, sans-serif',
    '"Comic Sans MS", cursive, sans-serif',
    'Impact, Charcoal, sans-serif',
    '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    'Tahoma, Geneva, sans-serif',
    '"Trebuchet MS", Helvetica, sans-serif',
    '"Courier New", Courier, monospace',
    '"Lucida Console", Monaco, monospace'
]

Util.objectToGridFormat = function (obj, isInteger) {
    isInteger = isInteger || false;
    var arr = []
    arr.push({id: '', name: ''});
    for (var keys in obj) {
        if (isInteger) {
            arr.push({id: parseInt(keys), name: obj[keys]})
        } else {
            arr.push({id: keys, name: obj[keys]})
        }
    }
    return arr;
}

Util.random = function (length) {
    length = length || 5;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

Util.typePrint = {
    register: '{"paper_size":"F4","paper_size_width":"215","paper_size_height":"330","padding_top":"8","padding_right":"8","padding_bottom":"8","padding_left":"8","border":"1","font":"0","font_size":"10","header":"SURAT PERINTAH KERJA","header_font":"0","header_font_size":"26"}',
    estimation: '{"paper_size":"F4","paper_size_width":"215","paper_size_height":"330","padding_top":"8","padding_right":"8","padding_bottom":"8","padding_left":"8","border":"1","font":"0","font_size":"12","header":"ESTIMASI BIAYA PERBAIKAN","header_font":"0","header_font_size":"18"}',
    invoice: '{"paper_size":"A5","paper_size_width":"148","paper_size_height":"210","padding_top":"8","padding_right":"8","padding_bottom":"8","padding_left":"8","border":"1","font":"0","font_size":"12","header":"INVOICE","header_font":"0","header_font_size":"18"}',
    currency: '{"symbol":"Rp","name":"Rupiah","thousand":"."}'
}

Util.isJson = function (text) {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        //the json is ok
        return true;
    } else {
        return false;
        //the json is not ok
    }
}

Util.isEmptyObject = function (obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

Util.serializeTable = function (table) {
    return '`' + table + '`';
}

Util.getKey = function (obj, field) {
    var t = '';
    for (item in obj) {
        if (obj[item] == field) {
            return item;
        }
    }

    return t;
}

/**
 * Camelize a string, cutting the string by multiple separators like
 * hyphens, underscores and spaces.
 *
 * @param {text} string Text to camelize
 * @return string Camelized text
 *
 * // someDatabaseFieldName
 console.log(camelize("some_database_field_name"));

 // someLabelThatNeedsToBeCamelized
 console.log(camelize("Some label that needs to be camelized"));

 // someJavascriptProperty
 console.log(camelize("some-javascript-property"));

 // someMixedStringWithSpacesUnderscoresAndHyphens
 console.log(camelize("some-mixed_string with spaces_underscores-and-hyphens"));
 */
Util.camelize = function (text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();
    });
}

/**
 * Decamelizes a string with/without a custom separator (underscore by default).
 *
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 *
 * // some database field name (separate with an empty space)
 console.log(decamelize("someDatabaseFieldName", " "));

 // some-label-that-needs-to-be-camelized (separate with an hyphen)
 console.log(decamelize("someLabelThatNeedsToBeCamelized", "-"));

 // some_javascript_property (separate with underscore)
 console.log(decamelize("someJavascriptProperty", "_"));
 */
Util.decamelize = function (str, separator) {
    separator = typeof separator === 'undefined' ? '_' : separator;
    return str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
}

Util.lastWord = function (words) {
    var n = words.split(" ");
    return n[n.length - 1];
}

Util.arrayUnShift = function (arr) {
    var obj = {}
    obj[arr[0]] = '';
    obj[arr[1]] = '';

    return obj;
}

Util.in_array = function (needle, haystack) {
    haystack = haystack || [];
    return haystack.includes(needle);
}

Util.gridSearch = function (visibles, relations, name, value) {
    var index = 0;
    var elm = "input";
    for (var i = 0; i < visibles.length; i++) {
        if (name == visibles[i]) {
            index = i;
        }
    }

    if (!Util.isEmptyObject(relations)) {
        var arr = Object.keys(relations)
        for (var i = 0; i < arr.length; i++) {

            if (name == arr[i]) {
                elm = "select";
            }
        }
    }

    return 'searchValue.eq(' + index + ').find("' + elm + '").val("' + value + '");';
}


Util.dumpError = function (err) {
    if (typeof err === 'object') {
        if (err.message) {
            console.log('\nMessage: ' + err.message)
        }
        if (err.stack) {
            console.log('\nStacktrace:')
            console.log('====================')
            console.log(err.stack);
        }
    } else {
        console.log(err);
    }
}

Util.fileAttribute = function (filename) {
    filename = filename.toLowerCase() || "";
    var ext = filename.split('.').pop();
    var images = ['jpg', 'jpeg', 'png', 'webp', 'bmp', 'tif', 'gif', 'png'];
    var obj = {}
    obj.ext = ext;
    if (Util.in_array(ext, images)) {
        obj.type = 'image';
    } else {
        obj.type = 'fle';
    }
    return obj;
}

Util.fileView = function (dir, file) {
    var filename = dir + file;
    var html = '';
    var obj = Util.fileAttribute(filename);
    if (obj.type == 'image') {
        html = '<img src="' + filename + '" height="100px">'
    } else {
        if (file) {
            html = '<a target="_blank" href="' + filename + '">' + file + '</a>'
        }
    }

    return html;
}

Util.arrayToList = function (str, array, delimiter, isCount) {
    delimiter = delimiter || "<br>"
    isCount = isCount || 1;
    var html = '';
    if (str && Util.isJson(str)) {
        var arr = JSON.parse(str);
        for (var i = 0; i < arr.length; i++) {
            html += isCount == 1 ? (i + 1) + ". " + array[arr[i]] + delimiter : " " + array[arr[i]] + delimiter;
        }
        html = html.slice(0, (delimiter.length * -1))
    }

    return html;
}

Util.menuAccess = function (menu, params) {
    const roles = require('./role')
    const routes = roles.routes;
    if (Util.in_array(menu, routes)) {
        if (Util.in_array(menu, params))
            return true;
        else return false;

    } else {
        return true;
    }
}

Util.dropdownHelper = function (data, field, model) {
    console.log(data)
    console.log(field)
    let fieldsx = field + '[]';

    let name = field + "[]";
    let myvalue = typeof data[fieldsx] == undefined ? " " : typeof data[fieldsx] == "string" ? '["' + data[fieldsx] + '"]' : JSON.stringify(data[name])
    if (myvalue) {
        let unique = myvalue.indexOf("[") > -1 ? myvalue : !myvalue ? "" : '[' + myvalue + ']';
        unique = JSON.parse(unique);
        data[field] = JSON.stringify(unique.filter(Util.arrayUnique));
        delete data[name]
    }
    if (model.fields[field].required) {
        if (!data[field]) {
            return false;
        }
    }
    return data;
}

Util.dropdownAdd = function (data, field, model, datas) {
    let name = field + "[]";
    let myvalue = typeof datas == undefined ? " " : typeof datas == "string" ? '["' + datas + '"]' : JSON.stringify(datas)
    if (myvalue) {
        let unique = myvalue.indexOf("[") > -1 ? myvalue : !myvalue ? "" : '[' + myvalue + ']';
        unique = JSON.parse(unique);
        myvalue = JSON.stringify(unique.filter(Util.arrayUnique));
        delete data[name]

        data[field] = myvalue;
    }
    if (model.fields[field].required) {
        if (!myvalue) {
            return false;
        }
    }
    return data;
}
//array unique
// array.filter(Util.arrayUnique);
Util.arrayUnique = (value, index, self) => {
    return self.indexOf(value) == index;
}

Util.virtualHelper = function (obj) {
    if (Util.isEmptyObject(obj)) return;
    if (obj == undefined) return;

    var str = '';
    for (var key in obj) {
        str += ", `" + obj[key] + "` AS " + key;
    }

    return str;
}

Util.fieldToName = function (str) {
    var title = Util.capitalizeFirstLetter(Util.decamelize(str));
    title = Util.replaceAll(title, "_", " ");
    title = Util.replaceAll(title, " id", "");
    title = Util.capitalizeAfterSpace(title);

    var lastWords = Util.lastWord(title);
    if (title.length > 4 && lastWords == "Id") {
        title = title.replace("Id", "");
    }

    return title;
}

Util.nots = ['id', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'created_at', 'updated_at', 'created_by', 'updated_by', 'modified_by', 'companyId'];

Util.requiredFields = function (obj) {
    var nots = Util.nots;
    var arr = [];
    for (var key in obj) {
        if (!Util.in_array(key, nots)) {
            if (obj[key].required == true) {
                arr.push(key)
            }
        }
    }
    return arr;
}


Util.extractDetails = function (obj) {
    let arr = [];
    for (var key in obj) {
        if (obj[key].length > 0) {
            for (var i = 0; i < obj[key].length; i++) {
                arr.push(obj[key][i])
            }
        }
    }
    return arr;
}

Util.arrayToConcat = function (arr) {
    let str = 'CONCAT(';
    for (var i = 0; i < arr.length; i++) {
        str += arr[i] + ',"  -  ",'
    }
    str = str.slice(0, -9);
    str += ")"

    return str;
}

//sequence all fields based on drag drop generator
Util.arraySequence = function (arr, left, right) {
    left = left || [];
    right = right || [];
    var obj = Util.arrayToObject(arr, "Field");
    var temp = [], stores = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].Field == "id") {
            stores.push(arr[i].Field)
            temp.push(arr[i])
        }
    }
    if (Array.isArray(left)) {
        for (var i = 0; i < left.length; i++) {
            if (i % 2 == 0) {
                temp.push(obj[left[i]])
                stores.push(left[i])
            }
        }
    }
    if (Array.isArray(right)) {
        for (var i = 0; i < right.length; i++) {
            if (i % 2 == 0) {
                temp.push(obj[right[i]])
                stores.push(right[i])
            }
        }
    }
    if (Array.isArray(left)) {
        for (var i = 0; i < left.length; i++) {
            if (i % 2 == 1) {
                temp.push(obj[left[i]])
                stores.push(left[i])
            }
        }
    }
    if (Array.isArray(right)) {
        for (var i = 0; i < right.length; i++) {
            if (i % 2 == 1) {
                temp.push(obj[right[i]])
                stores.push(right[i])
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        var field = arr[i].Field;
        if (!Util.in_array(field, stores)) {
            temp.push(arr[i])
        }
    }

    return temp;
}

Util.isInteger = (value) => {
    return !isNaN(value) && (function (x) {
            return (x | 0) === x;
        })(parseFloat(value))
}

Util.isNumeric = function (value) {
    return /^-?\d+$/.test(value);
}

Util.tags = function (tags) {
    var html = '';
    tags = tags || "";
    if (tags.indexOf(",") > -1) {
        var explode = tags.split(",");
        for (var i = 0; i < explode.length; i++) {
            html += `<a href="#" rel="tag">${explode[i]}</a>`
        }
    } else {
        html += `<a href="#" rel="tag">${tags}</a>`;
    }

    return html;
}

/*
 get extension of filename
 */

Util.getExtensionFile = (str) => {
    str = str || "";
    let extension = str.split('.').pop();
    extension = extension.toLowerCase();
    let ret = extension;
    if (extension == "jpg") {
        ret = "jpeg";
    }
    return ret;
}
Util.badgeError = (msg) => {
    return `<span class="badge badge-danger">${msg}</span>`;
}
Util.badgeSuccess = (msg) => {
    return `<span class="badge badge-success">${msg}</span>`;
}

Util.alertError = function (msg) {
    return `<div class="alert alert-danger" role="alert">${msg}</div>`;
}
Util.alertSuccess = function (msg) {
    return `<div class="alert alert-success" role="alert">${msg}</div>`;
}
Util.alertInfo = function (msg) {
    return `<div class="alert alert-info" role="alert">${msg}</div>`;
}

Util.regexPassword = (lengthMin, lengthMax) => {
    //minimum length
    lengthMin = lengthMin || 6;
    lengthMax = lengthMax || 20;

    return new RegExp('^[a-zA-Z0-9_-]{' + lengthMin + ',' + lengthMax + '}$', "i");
}

//huruf dan angka saja
Util.regexCode = (lengthMin, lengthMax) => {
    lengthMin = lengthMin || 2;
    lengthMax = lengthMax || 10;

    return new RegExp('^[A-Z0-9]{' + lengthMin + ',' + lengthMax + '}$', "i");
}

/*
 List payroll type based on periode
 */

var periodeList = function (obj, str) {
    str = str || "";
    let html = '';
    let json = str.length > 1 ? JSON.parse(str) : {};
    for (var key in json) {
        if (json[key] == 1) {
            html += obj[key].name + ", "
        }
    }

    html.slice(0, -2);
    return html;
}

Util.imageProfile = function (image) {
    return image ? image.indexOf("http") > -1 ? image : "/uploads/user/" + image : "/img/user.png";
}

/*
 get template formula helper
 */
Util.formulaVariable = function () {

    return `<table class="table table-hover">
					<tbody>
					<tr>
						<td><strong>RETURN</strong></td>
						<td>Adalah nilai balik yang dihasilkan.</td>
					</tr>
					<tr>
						<td><strong>this.getNumber(BEFORES.xxxx)</strong></td>
						<td>Function/Casting variable untuk mendapatkan nilai dalam bentuk angka.</td>
					</tr>
					<tr>
						<td><strong>this.getString(BEFORES.xxxx)</strong></td>
						<td>Function/Casting variable untuk mendapatkan nilai dalam bentuk string.</td>
					</tr>
					<tr>
						<td><strong>EMPLOYEE</strong></td>
						<td>OBJECT EMPLOYEE DATA</td>
					</tr>
					<tr>
						<td><strong>PAYROLL_PERIOD</strong></td>
						<td>OBJECT PAYROLL PERIODE DATA</td>
					</tr>
					<tr>
						<td><strong>PAYROLL_TYPE</strong></td>
						<td>OBJECT PAYROLL_TYPE DATA</td>
					</tr>
					<tr>
						<td><strong>ABSENCES</strong></td>
						<td>ARRAY ABSENCES</td>
					</tr>
					<tr>
						<td><strong>PARAMETER_INCOME</strong></td>
						<td>Hasil dari penjumlahan Parameter Income.</td>
					</tr>
					<tr>
						<td><strong>PARAMETER_INCOME_REGULAR</strong></td>
						<td>Hasil dari penjumlahan Parameter Income kategori Regular.</td>
					</tr>
					<tr>
						<td><strong>PARAMETER_INCOME_IRREGULAR</strong></td>
						<td>Hasil dari penjumlahan Parameter Income kategori Irregular.</td>
					</tr>

					<tr>
						<td><strong>COMPONENT_CATEGORY</strong></td>
						<td>1 = REGULAR <br>2 = IRREGULAR </td>
					</tr>
					<tr>
						<td><strong>TAX_CATEGORY</strong></td>
						<td>1 = NON TAXABLE <br>2 = TAX FINAL <br>3 = TAX NON FINAL </td>
					</tr>
					<tr>
						<td><strong>AGE</strong></td>
						<td>Employee Age </td>
					</tr>
					<tr>
						<td><strong>DEDUCTION_EMPLOYEMENT_ACTIVE</strong></td>
						<td>1= NOT ACTIVE, 2=ACTIVE </td>
					</tr>
					<tr>
						<td><strong>EMPLOYEE_STATUS</strong></td>
						<td>0= BLNK<br> 1= PERMANENT<br> 2=CONTRACT<br> 3=FREELANCE<br> 4=COMMISSIONER<br> 5=INTRENSHIP<br> 6=OUTSOURCE<br> </td>
					</tr>
					<tr>
						<td><strong>MARITAL_STATUS</strong></td>
						<td>1 = SINGLE <br>2 = MARIED </td>
					</tr>
					<tr>
						<td><strong>GENDER</strong></td>
						<td>1 = Pria <br>2 = Wanita </td>
					</tr>
					<tr>
						<td><strong>TAX_FAMILY</strong></td>
						<td>TKO,TK1,TK2,TK3,K0,K1,K2,K3 </td>
					</tr>
					<tr>
						<td><strong>NPWP_NUMBER</strong></td>
						<td>NOMOR NPWP  </td>
					</tr>
					<tr>
						<td><strong>IS_NPWP_NUMBER</strong></td>
						<td>Jika Punya NPWP = 1, tidak ada NPWP = 0  </td>
					</tr>
					<tr>
						<td><strong>IS_EXPAT</strong></td>
						<td>Jika expatriate = 1, lokal = 0  </td>
					</tr>
					<tr>
						<td><strong>IS_RESIGN</strong></td>
						<td>Jika resign = 1, masih active = 0  </td>
					</tr>
					<tr>
						<td><strong>RESIGN_PERIOD</strong></td>
						<td>Tanggal resign format (YYYY-MM-DD) </td>
					</tr>
					<tr>
						<td><strong>RESIGN_DATE</strong></td>
						<td>TANGGAL RESIGN JIKA ADA  </td>
					</tr>
					<tr>
						<td><strong>RESIGN_MONTH</strong></td>
						<td>Bulan Resign </td>
					</tr>
					<tr>
						<td><strong>RESIGN_YEAR</strong></td>
						<td>Tahun Resign  </td>
					</tr>
					<tr>
						<td><strong>JOIN_PERIOD</strong></td>
						<td>Periode JOin disesuaikan dengan bulan periode perhitungan </td>
					</tr>
					<tr>
						<td><strong>ESTIMATION_PERIOD</strong></td>
						<td>Periode JOin disesuaikan dengan bulan periode perhitungan </td>
					</tr>
					<tr>
						<td><strong>JOIN_DATE</strong></td>
						<td>TANGGAL BERGABUNG KE PERUSAHAAN SEBAGAI EMPLOYEE  </td>
					</tr>
					<tr>
						<td><strong>JOIN_MONTH</strong></td>
						<td>BULAN BERGABUNG KE PERUSAHAAN SEBAGAI EMPLOYEE  </td>
					</tr>
					<tr>
						<td><strong>JOIN_YEAR</strong></td>
						<td>TAHUN BERGABUNG KE PERUSAHAAN SEBAGAI EMPLOYEE  </td>
					</tr>
					<tr>
						<td><strong>BENEFIT_DEDUCTION_MONTH </strong></td>
						<td>(HASIL PERHITUNGAN BENEFIT DEDUCTION HANYA DI PERIODE BULAN TERSEBUT);  </td>
					</tr>
					<tr>
						<td><strong>INCOME_MONTH_PREVIOUS </strong></td>
						<td>TOTAL PARAMETER_INCOME PERIODE BULAN SEBELUMNYA YANG TERMASUK CATEGORY PARAMETER_INCOME TAX PPH21; </td>
					</tr>
					<tr>
						<td><strong>BENEFIT_DEDUCTION_MONTH_PREVIOUS  </strong></td>
						<td>(TOTAL BENEFIT_DEDUCTION PERIODE BULAN SEBELUMNYA); </td>
					</tr>
					<tr>
						<td><strong>TAX_MONTH_PREVIOUS  </strong></td>
						<td>TOTAL DARI HASIL PERHITUNGAN PAJAK PERIODE SEBELUMNYA; </td>
					</tr>
					<tr>
						<td><strong>MONTH_PERIOD</strong></td>
						<td>Bulan di Payroll Periode, Januari = 1, Desember = 12</td>
					</tr>
					<tr>
						<td><strong>OVERTIME</strong></td>
						<td>Dalam Bentuk <strong> Array Object </strong>
						<br>
						{<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;DAY : "Sunday",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;DATE : "2019-10-27",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;IS_WORK_DAY : 1,<br>
						      &nbsp;&nbsp;&nbsp;&nbsp;WORKING_HOURS : 8,<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;TOTAL_MINUTE : 400,<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;TOTAL_HOUR : "10:30"<br>
						}<br>
						<strong> Keterangan : </strong><br>
						DAY = Nama Hari <br>
						DATE = Tanggal <br>
						WORKING_HOURS = Jam Kerja dalam sehari <br>
						IS_WORK_DAY  =  1 = Hari Kerja, 0 = Libur <br>
						TOTAL_MINUTE = Total Menit  <br>
						TOTAL_HOUR : Total Jam
						</td>
					</tr>
						<tr>
						<td><strong>PAYROLL_PERIOD</strong></td>
						<td>Dalam Bentuk <strong> Object </strong>
						<br>
						{<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;CODE : "123CODE",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;NAME : "PERIODE FEB 2020",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;START_PERIOD : "01-02-2020",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;END_PERIOD : "29-02-2020",<br>
						  &nbsp;&nbsp;&nbsp;&nbsp;START_PERIOD_OVERTIME : "01-01-2020",<br>
						    &nbsp;&nbsp;&nbsp;&nbsp;END_PERIOD_OVERTIME : "31-01-2020",<br>
						     &nbsp;&nbsp;&nbsp;&nbsp;IS_LOAN : "1",<br>
						}<br>
						<strong> Keterangan : </strong><br>
						CODE = Code Periode <br>
						NAME = Nama Periode <br>
						START_PERIOD = Tgl Periode Mulai <br>
						END_PERIOD  =  Tgl Periode Selesai <br>
						START_PERIOD_OVERTIME = Tgl Periode Overtime Mulai  <br>
						END_PERIOD_OVERTIME : Tgl Periode Overtime Selesai  <br>
						IS_LOAN : 1 = jika ada loan, 0 = tidak ada loan<br>
						</td>
					</tr>
					<tr>
						<td><strong>BEFORES</strong></td>
						<td>VARIABLE ANDA DI BULAN LALU DALAM BENTUK OBJECT <br>
						<strong> Contoh : </strong><br>
						BEFORES.CODE = NILAI Code di bulan lalu kalau tidak ada nilai 0 <br>
						BEFORES.TAX_MONTH = Nilai TAX_MONTH di bulan lalu <br>

						</td>
					</tr>
					<tr>
						<td><strong>ABSEN_DEDUCTION</strong></td>
						<td>Jumlah hari ketidakhadiran</td>
					</tr>
					<tr>
						<td><strong>LATE</strong></td>
						<td>Jumlah frequensi keterlambatan</td>
					</tr>
					<tr>
						<td><strong>EARLY</strong></td>
						<td>Jumlah frequensi early</td>
					</tr>
					<tr>
						<td><strong>GRADE</strong></td>
						<td>1 = Komisaris <br> 2 = Director <br> 3 = General Manager <br> 4 = Deputy<br>
							5 = Section <br> 4 = Leader <br> 5 = Staff/admin/general/teknis </td>
					</tr>

					<tr>
						<td><strong>OFFICIAL_TRAVEL</strong></td>
						<td>Nilai hasil perhitungan official travel</td>
					</tr>
					<tr>
						<td><strong>ACHIEVEMENT</strong></td>
						<td>Nilai hasil perhitungan Achievement</td>
					</tr>
					<tr>
						<td><strong>KPI_DEDUCTION</strong></td>
						<td>Nilai hasil perhitungan KPI</td>
					</tr>
					</tbody>
				</table>`;

}
module.exports = Util;