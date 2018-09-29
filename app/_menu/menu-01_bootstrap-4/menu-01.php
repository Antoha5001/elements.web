<!Doctype html>
<html lang="ru">

<head>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content=""/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta property="og:image" content="path/to/image.jpg">
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" type="text/css" href="css/style.css">
<!--    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <title>123</title>

    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#000">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#000">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#000">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body>
<header class="container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <nav class="menu">
                    <input type="checkbox" name="toggle" id="menu" class="menu__toggle"/>
                    <label for="menu" class="menu__toggle"><i class="fa fa-bars"></i>Меню</label>
                    <ul>
                        <li>
                            <a href="#"><i class="fa fa-home"></i>Главная</a>
                        </li>

                        <li>
                            <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1"/>
                            <a href="#"><i class="fa fa-shopping-basket"></i>Компания</a>
                            <label for="sub_m1" class="submenu__toggle">
                                <i class="fa"></i>
                            </label>
                            <ul>
                                <li><a href="#">О типографии</a></li>
                            </ul>
                        </li>

                        <li>
                            <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m2"/>
                            <a href="#"><i class="fa fa-cogs"></i>Продукция</a>
                            <label for="sub_m2" class="submenu__toggle"><i class="fa"></i></label>
                            <ul>
                                <li><a href="#">Буклеты</a></li>
                                <li><a href="#">Брошуры</a></li>
                                <li><a href="#">Каталоги</a></li>
                            </ul>
                        </li>

                        <li><a href="#"><i class="fa fa-newspaper"></i>Новости</a></li>
                        <li><a href="#"><i class="fa fa-address-book"></i>Услуги</a></li>

                        <li>
                            <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1"/>
                            <a href="#"><i class="fa fa-shopping-basket"></i>Компания</a>
                            <label for="sub_m1" class="submenu__toggle">
                                <i class="fa"></i>
                            </label>
                            <ul>
                                <li><a href="#">Одежда</a></li>
                                <li>
                                    <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1-1"/>
                                    <span class=" fa icon"></span>
                                    <a href="#">Электроника</a>
                                    <label for="sub_m1-1" class="submenu__toggle"><i class="fa"></i></label>
                                    <ul>
                                        <li><a href="#">Кофеварки</a></li>
                                        <li>
                                            <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1-1-1"/>

                                            <span class=" fa icon"></span>
                                            <a href="#">Чайники</a>
                                            <label for="sub_m1-1-1" class="submenu__toggle"><i class="fa"></i></label>
                                            <ul>
                                                <li><a href="#">Rowenta</a></li>
                                                <li><a href="#">Samsung</a></li>
                                                <li><a href="#">Philips</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Мультиварки</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Продукты питания</a></li>
                                <li><a href="#">Инструменты</a></li>
                                <li><a href="#">Быт. химия</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</header>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- <script>window.jQuery || document.write('<script src="script/jquery.js"><\/script>')</script> -->
</body>

</html>
