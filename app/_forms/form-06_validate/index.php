<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>php</p>
<form action="" method="post" id="test_form" class="test_form" role="form">

    <div>
        <label for="test_name">Введите имя</label>
        <input type="text" name="test_name" id="test_name">
    </div>
    <div>
        <label for="test_phone">Введите телефон</label>
        <input type="text" name="test_phone" id="test_phone">
    </div>
    <div>
        <label for="test_assent">Примите согласие на обработку персональных данных</label>
        <input type="checkbox" name="test_assent" id="test_assent">
    </div>

    <button type="submit">Отправить</button>
</form>

<button id="testsub">Test</button>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="script/jquery.validate.min.js"></script>
<script>
    (function () {
        document.addEventListener("DOMContentLoaded", function (evt) {

            $("#test_form").validate({
                rules: {
                    test_name: {
                        required: true
                    },
                    test_assent: {
                        required: true
                    }
                },
                messages: {
                    test_name :{

                    }
                },
                submitHandler: function (form) {

                    // alert(e);
                    var request = new XMLHttpRequest();
                    var data = new FormData(form);

                    request.open("POST", "script/send.php");
                    request.send(data);

                    request.onreadystatechange = function (ev) {
                        if (request.readyState === 4){

                            var elem = form.elements;

                            for (var i = 0 ; i < elem.length; i++) {
                                elem[i].value = "";
                            }
                        }
                    }

                }
            });
            /**/

            $("#testsub").on("click", function () {

                var request = new XMLHttpRequest();

                // if (request.readyState === 0){
                //     alert("0");
                // }
                if (request.readyState === 1){
                    alert("1");
                }

                request.onreadystatechange = function (ev) {
                    if (request.readyState === 4){
                        alert(request.responseText);
                    }
                }


                request.open("GET","send.php");
                request.send();
            });

        })
    })();
</script>
</body>
</html>