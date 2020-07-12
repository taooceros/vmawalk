window.onload = function() {

    layui.use(['layer', 'jquery', 'form'], function() {

        var $ = layui.jquery;

        for (var i = 1; i < teachers.length; i++) {
            if (teachers[i].chineseName == null) {
                $("#search").append(new Option(teachers[i].englishName, "1-" + teachers[i].id));
            }
        }

        for (var i = 1; i < teachers.length; i++) {
            if (teachers[i].chineseName != null) {
                $("#search").append(new Option(teachers[i].chineseName + " " + teachers[i].englishName, "1-" + teachers[i].id));
            }
        }

        Courses.forEach(i => {
            $("#search").append(new Option(i.courseName + " " + i.courseCode, "2-" + i.courseCode));
        })

        layui.form.render('select');

    })
}

layui.use(['form', 'jquery'], function() {
    var form = layui.form;
    var $ = layui.$;
    form.on('submit(submit)', function(data) {
        query = data.field.teacher;
        link = "menu/menu.html?query=" + encodeURI(encodeURI(query)) + "";
        window.location.href = link;
        return false;
    });
})