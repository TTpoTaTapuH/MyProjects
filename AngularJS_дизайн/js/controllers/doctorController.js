var myApp=angular.module('myApp',[]);
myApp.controller('doctorController', function($scope){
    
    //$scope.full = true;
    $scope.changeFull = function (item){
        alert(""+item);
        for(var i=0;i<$scope.doctor;i++){
            if($scope.doctor[i].med_name==item.med_name){
                $scope.inform = $scope.doctor[i];
            }
        }
    };
    $scope.inform = "";
    $scope.medicina=["Маммолог","Невропатолог","Анестезиолог", "Венеролог", "Гастроэнтеролог", "Гинеколог", "Андролог", "Кардиолог", "Логопед", "Педиатр", "Проктолог", "Терапевт", "Уролог-андролог", "Хирург", "Эндокринолог", "Оториноларинготолог", "Невролог", "Нейрохирург", "Офтальмолог"];
    $scope.doctor=[
        { med_name:"Маммолог",people:
            [
                {name:"Светлана Осипова Федоровна", major:"Специалист в области маммологии", image:"",age_work:"30"},
                {name:"Иванов Иван Дмитричевич", major:"Специалист в области маммологии", image:"",age_work:"25"},
                {name:"Путин Владимир Сергеевич", major:"Любитель потрогать грудь", image:"",age_work:"17"}
            ]
        },
        { med_name:"Невропатолог",people:
            [
                {name:"Лопухова Аида Викторовна", major:"Невропатолог и хирург", image:"",age_work:"40"},
                {name:"Душанбе Тимур Якубобич", major:"Невропатолог", image:"",age_work:"5"},
                {name:"Хохотун Павел Иванович", major:"Невропатолог", image:"",age_work:"18"}
            ]
        }
    ]
}); 
