from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from mainApp.views import index, doctors, register, profile, profile_data, profile_patient, profile_medcard
from mainApp.views import profile_analyse, test, uslugi, profile_draft, profile_to_priem, profile_priems, uslugi_pk
urlpatterns = [
    path('', index),
    path('registration/', register, name='register'),
    path('doctor/', doctors),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', profile, name='profile'),
    path('profile/data/', profile_data, name='profile_data'),
    path('profile/patient/', profile_patient, name='profile_patient'),
    path('profile/medcard/', profile_medcard, name='profile_medcard'),
    path('profile/analyse/', profile_analyse, name='profile_analyse'),
    path('profile/draft/', profile_draft, name='profile_draft'),
    path('profile/to_priem/', profile_to_priem, name='profile_to_priem'),
    path('profile/priems/', profile_priems, name='profile_priems'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('uslugi/<int:service_id>/', uslugi_pk, name='uslugi_pk'),
    path('uslugi/', uslugi, name='uslugi'),
    path('test/', test),
    #path('profile/', ),
]