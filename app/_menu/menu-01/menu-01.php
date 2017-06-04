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
    <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
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
    <style>
        html {
        }
    </style>
</head>

<body>
<header>
    <nav class="menu">
        <input type="checkbox" name="toggle" id="menu" class="menu__toggle"/>
        <label for="menu" class="menu__toggle"><i class="fa fa-bars"></i>Меню</label>
        <ul>
            <li><a href="#"><i class="fa fa-home"></i>Главная</a></li>
            <li>
                <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1"/>
                <a href="#"><i class="fa fa-shopping-basket"></i>Продукция</a>
                <label for="sub_m1" class="submenu__toggle"><i class="fa"></i></label>
                <ul>
                    <li><a href="#">Одежда</a></li>
                    <li>
                        <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1-1"/>
                        <a href="#">Электроника</a>
                        <label for="sub_m1-1" class="submenu__toggle"><i class="fa"></i></label>
                        <ul>
                            <li><a href="#">Кофеварки</a></li>
                            <li>
                                <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m1-1-1"/>
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
            <li>
                <input type="checkbox" name="toggle" class="submenu__toggle" id="sub_m2"/>
                <a href="#"><i class="fa fa-cogs"></i>Услуги</a>
                <label for="sub_m2" class="submenu__toggle"><i class="fa"></i></label>
                <ul>
                    <li><a href="#">Услуга 1</a></li>
                    <li><a href="#">Услуга 2</a></li>
                    <li><a href="#">Услуга 3</a></li>
                </ul>
            </li>
            <li><a href="#"><i class="fa fa-newspaper-o"></i>Новости</a></li>
            <li><a href="#"><i class="fa fa-address-book-o"></i>Контакты</a></li>
        </ul>
    </nav>
</header>
<script type="text/javascript" src="script/scripts.min.js"></script>
<!-- <script>window.jQuery || document.write('<script src="script/jquery.js"><\/script>')</script> -->
</body>

</html>
