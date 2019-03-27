---
title: "Aplikacje mobilne dla systemu Android"
collection: teaching
type: "Wykłady i laboratoria"
permalink: /teaching/2019-android
venue: "AMW, WNiUO"
date: 2019-03-01
location: "Gdynia, Polska"
---

Zagadnienia i sposób zaliczenia:

Zasady zaliczenia przedmiotu
======

1. Dowolny język do realizacji zadania.
2. Zadanie należy zrealizować do kolejnych zajęć - max. 5 punktów,
  * Tydzień opóźnienia w realizacji zadania - max. 3 punkty,
  * Przekroczenie obu terminów - max. 1 punkt.
3. Zrealizowane zadanie należy umieścić na portalu GitHub (lub BitBucket) i wysłać link do prowadzącego (Slack).
4. Zadanie należy zaprezentować osobiście prowadzącemu na laboratorium. 
5. Pierwsze laboratorium jest "rozruchowe" - można oddawać zadania, ale nie trzeba.
6. Brak odpowiedniej liczby punktów spowoduje konieczność stworzenia nowych projektów.
7. Do każdego zadania należy dodać plik (najlepiej pdf) zawierający zrzuty działającej aplikacji.
Przyspieszy to proces sprawdzania. 
8. Brak znajomości utworzonej aplikacji powoduje obniżenie oceny.

Tematy zadań
======
Zadania bazują głównie na projektach z książki "Android. Programowanie aplikacji. Rusz głową!".
1. Kalkulator 
  * bazuje na rozdziale nr 2;
  * wybieramy dwie liczby (każda zapisana na sztywno w listie rozwijanej typu Spinner) i po kliknięciu przycisku otrzymujemy wynik;
  * praca z zasobami łańcuchowymi i tablicowymi mile widziana;
  * należy użyć elementów typu Spinner (argumenty do działań - pierwsza liczba i druga liczba), Button (wybór działania, może być kilka Button'ów) i TextView (wyświetlanie wyniku).


2. Aktywności i intencje
  * bazuje na rozdziale nr 3;
  * tworzymy trzy aktywności;
  * za pomocą intencji tworzymy przejścia z każdej aktywności do pozostałych;
  * analiza pliku manifestu wskazana!
  * użycie metod putExtra() i getIntent() konieczne do uzyskania wyższej oceny;
  * użycie 'akcji' i filtrów intencji - do przetestowania.


3. Widoki i grupy widoków w różnych układach 
  * bazuje na rozdziałach nr 5 i 6;
  * należy utworzyć dwie aktywności - jedna z ConstraintLayout, druga z FrameLayout;
  * dla ConstraintLayout należy zaprojektować <b> własny</b> oryginalny układ elementów,
  * za pomocą intencji tworzymy przejścia z jednej aktywności do drugiej;
  * należy wykorzystać w wybranych aktywnosciach elementy takie jak:
        * przełącznik,
        * checkbox,
        * radio button,
        * lista rzwijana,
        * obrazek,
        * obrazek wyświetlony na przycisku,
        * widok przewijany,
        * komunikaty typu (Toast)
  * należy korzystać jak najwięcej z zasobów (np. łańcuchowych), gdzie powinny być umieszczone odpowiednie parametry layout'u.

4. Widoki list, adaptery, paski aplikacji ...
  * bazuje na rozdziałach nr 7 i 8;
  * należy utworzyć aplikację co najmniej 3-poziomową (poziomy inne niż w ww. rozdziałach);
  * aktywność główna zawiera widok listy i dowolny obrazek (np. logo);
  * każda pozycja z listy po kliknięciu prowadzi do poziomu drugiego (aktywność kategorii), zawierającego kolejny widok listy;
  * każda pozycja z listy po kliknięciu prowadzi do poziomu trzeciego (aktywność szczegółów), zawierającego informacje o danym elemencie (produkcie itp.);
  * utwórz klasę przechowującą informacje o elementach list;
  * dodaj pliki graficzne do zasobów;
  * zaimplementuj obiekt nasłuchujący (reagowanie na kliknięcia widoku);
  * użyj adaptera do pobrania danych statycznych;
  * usuń pasek aplikacji, dodaj pasek narzędzi i zmień wybrany motyw, pozmieniaj również odpowiednie kolory;
  * dla paska narzędzi utwórz osobny layout, w aktywności należy skorzystać z import android.support.v7.widget.Toolbar;
  * pamiętaj o metodzie setSupportActionBar();
  * do paska narzędziowego dodaj przycisk, którego kliknięcie przeniesie nas do nowej aktywności InfoActivity;
  * aktywność InfoActivity powinna zawierać krótką informacje o aplikacji;
  * ww. pasek narzędzi należy dodać do każdej utworzonej aktywności;
  * dla każdej aktywności dodaj w pliku manifest label, który będzie wyświetlany na pasku narzędziowym;

  * cdn.

5. Fragmenty 
  * bazuje na rozdziałach nr 9-11;
  
6. Baza danych SQLite 
  * bazuje na rozdziałach nr 15 i 16;
  * można rozwinąć apkę z zadania nr 4, tak by dane pobierane były z bazy danych;

7. Zadania asynchroniczne 
  * bazuje na rozdziałach nr 17;

8. Usługi uruchomione i usługi lokalizacyjne 
  * bazuje na rozdziałach nr 18 i 19;


Punkty i oceny
======

|    Liczba punktów    	| Ocena    |
|    :-------------:	| :-----:  |
|    36 - 40	        |     5    |
|    32 - 35	        |    4,5   |
|    28 - 31	        |     4    |
|    24 - 27	        |    3,5   |
|    20 - 23	        |     3    |
|     0 - 19	        |     2    |
