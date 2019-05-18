"use strict";
cs142App.controller('UslugiController', ['$scope', function($scope) {

    // Replace this with the code for CS142 Project #4, Problem #2
 
    if ($scope.main) {
       $scope.main.title = 'Услуги';
    }
 
    $scope.changeFull = function (item){
         //alert(""+item+$scope.doctor[item].med_name);
         $scope.inform = $scope.doctor[item];
         //alert($scope.inform.people[0].name);
 };
 $scope.medicina=["Маммолог","Невропатолог","Анестезиолог", "Венеролог", "Гастроэнтеролог", "Гинеколог", "Андролог", "Кардиолог", "Логопед", "Педиатр", "Проктолог", "Терапевт", "Уролог-андролог", "Хирург", "Эндокринолог", "Оториноларинготолог", "Невролог", "Нейрохирург", "Офтальмолог"];
 $scope.doctor=[
     { med_name:"Маммолог",people:
         [
             {name:"Светлана Осипова Федоровна", major:"Специалист в области маммологии", image:"image/doctor3.jpg",age_work:"30"},
             {name:"Иванов Иван Дмитричевич", major:"Специалист в области маммологии", image:"image/doctor1.jpg",age_work:"25"},
             {name:"Путин Владимир Сергеевич", major:"Любитель потрогать грудь", image:"image/doctor2.jpg",age_work:"17"}
         ]
     },
     { med_name:"Невропатолог",people:
         [
             {name:"Лопухова Аида Викторовна", major:"Невропатолог и хирург Врач высшей категории, Кандидат медицинских наук, Доцент", image:"image/doctor4.jpg",age_work:"40"},
             {name:"Морозов Дмитрий Валерьевич", major:"Мануальный терапевт, Невропатолог, Остеопат, Эпилептолог", image:"image/doctor5.jpg",age_work:"11"},
             {name:"Морозова Елена Александровна", major:"Невропатолог, Эпилептолог", image:"image/doctor6.jpg",age_work:"32"}
         ]
     },
     { med_name:"Анестезиолог",people:
         [
             {name:"Анохина Антонина Васильевна", major:"Анестезиолог. Врач высшей категории, Доктор медицинских наук, Профессор", image:"image/doctor8.jpg",age_work:"32"},
         ]
     },
     { med_name:"Венеролог",people:
         [
             {name:"Хамитова Ольга Геннадиевна", major:"Венеролог, Дерматолог", image:"image/doctor7.jpg",age_work:"7"},
         ]
     },
     { med_name:"Гастроэнтеролог",people:
         [
             {name:"Лысенко Богдан Романович", major:"Гастроэнтеролог. Врач высшей категории", image:"image/doctor9.jpg",age_work:"8"},
         ]
     },
     { med_name:"Гинеколог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Гинеколог", image:"image/doctor10.jpg",age_work:"6"},
         ]
     },
     { med_name:"Андролог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Андролог", image:"image/doctor1.jpg",age_work:"6"},
         ]
     },
     { med_name:"Кардиолог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Кардиолог", image:"image/doctor2.jpg",age_work:"6"},
         ]
     },
     { med_name:"Логопед",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Логопед", image:"image/doctor3.jpg",age_work:"6"},
         ]
     },
     { med_name:"Педиатр",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Педиатр", image:"image/doctor4.jpg",age_work:"6"},
         ]
     },
     { med_name:"Проктолог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Проктолог", image:"image/doctor5.jpg",age_work:"6"},
         ]
     },
     { med_name:"Терапевт",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Терапевт", image:"image/doctor6.jpg",age_work:"6"},
         ]
     },
     { med_name:"Уролог-андролог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Уролог-андролог", image:"image/doctor7.jpg",age_work:"6"},
         ]
     },
     { med_name:"Хирург",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Хирург", image:"image/doctor8.jpg",age_work:"6"},
         ]
     },
     { med_name:"Эндокринолог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Эндокринолог", image:"image/doctor9.jpg",age_work:"6"},
         ]
     },
     { med_name:"Оториноларинготолог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Оториноларинготолог", image:"image/doctor10.jpg",age_work:"6"},
         ]
     },
     { med_name:"Невролог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Невролог", image:"image/doctor1.jpg",age_work:"6"},
         ]
     },
     { med_name:"Нейрохирург",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Нейрохирург", image:"image/doctor2.jpg",age_work:"6"},
         ]
     },
     { med_name:"Офтальмолог",people:
         [
             {name:"Сафиуллина Айгуль Айдаровна", major:"Офтальмолог", image:"image/doctor3.jpg",age_work:"6"},
         ]
     }
 ]
 
 $scope.inform = $scope.doctor[1];
 }]);
 