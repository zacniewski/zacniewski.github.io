---
title: "Projektowanie serwisów WWW"
collection: teaching
type: "Wykłady i laboratoria"
permalink: /teaching/2018-serwisy-WWW
venue: "AMW, WNiUO"
date: 2018-10-01
location: "Gdynia, Polska"
---

Zagadnienia i sposób zaliczenia:

Tematy zadań
======

1. Praca z systemem kontroli wersji. Podstawy WWW.
  * Stworzyć prostą stronę WWW (link ze Slacka), nie wymagającą użycia serwera webowego;
  * Użycie HTML, CSS i JS do ww. zadania;
  * Utworzyć zdalne repozytorium i przesłać tam wykonaną stronę.

2. Podstawy WWW - kontynuacja. Model DOM.
  * Zastosować na stronie znaczniki odpowiadające za układ strony - section, article, aside, header, footer, nav: <a href="http://how2html.pl/div-sekcje-html5/" target="_blank">pomoc</a>
  * Utworzyć plik drugi.html, który będzie wykorzystywany do adresowania względnego. Plik powinien zawierać podstawowy układ strony HTML.
  * Pomoc do dalszej części zadań: <a href="http://www.teacher.webd.pl/kurs_html5/k_0_0_0.php" target="_blank">pomoc</a>
  * Stworzyć link (adres względny - p. 3d) na stronie index.html do strony drugi.html i tam należy umieszczać kolejne części zadania.
  * Użyć elementów blokowych (p. 3a), elementów wstawionych (p. 3b) i elementów osadzonych (p. 3c) 
  * Stworzyć przykładową tabelę (p. 3e) o dowolnej tematyce. 
  * CSS - użyć jednostki miar względne i bezwzględne (p. 4a).
  * Przejrzeć p. 4b i zastosować wybrane przez siebie właściwości CSS.
  * Zastosować pseudoklasy do linków (p.4a).
  * Zastosować formy i układy selektorów (p.4a).
  * Zapoznać się z przykładowym modelem DOM (p. 2c) oraz <a href="https://kurs.browsehappy.pl/JavaScript/DOM" target="_blank">link1</a> 
    i <a href="https://jakubjurkian.pl/kurs-javascript-drzewo-dom-wybieranie-elementow/" target="_blank">link2</a>
  * Stworzyć nowe elementy (np. createElement i appendChild) oraz dodać do nich style (metoda 'style') i klasy ('add').

3. Projektowanie aplikacji bazodanowej. Architektura klient-serwer. Model MVC (lub MTV w innych frameworkach).
  * Zaprojektować serwis WWW typu 'blog'.
  * Uruchomić i przetestować serwer deweloperski, "sprawdzić" kody statusowe HTTP.
  * Utworzyć bazę danych, np. poprzez ORM (mapowanie obiektowo - relacyjne).
  * Wykonać proste zapytania do bazy danych w konsoli (zapisać zrzuty ekranu).
  * Utworzyć proste elementy M, V, C lub M, T, V.

4. Formularze. Podstawy Bootstrap i jQuery. AJAX.
  * Wykonać prosty formularz i za jego pomocą należy zaktualizować bazę danych.
  * Zmodyfikować serwis za pomocą frameworka Bootstrap i biblioteki jQuery.
  * Zastosować technologię AJAX (może być z jQuery) do aktualizacji wybranego fragmentu strony.

5. REST i RESTful API.
  * Dodać do serwisu funkcje CRUD (ang. create, read, update, delete);
  * Wygenerować przykładowe odpowiedzi serwera (responses) w postacji JSON lub XML.
  

6. SQL.
  * Zrealizować proste i średnio zaawansowane zapytania SQL;
  * Rodzaje zapytań np. z <a href="https://www.w3schools.com/sql/default.asp" target="_blank">tej strony</a> (od SQL SELECT do SQL INSERT INTO SELECT z menu po lewej)


7. Autentykacja i autoryzacja.
  * Przeanalizować sesje i ciasteczka;
  * Wdrożyć prosty system logowania.

8. Wdrażanie wybranego frameworka front-endowego.
  * Należy wybrać dowolny framework (oprócz Bootstrapa) i użyć go na swojej stronie;
  * Do wyboru do koloru, np. <a href="https://raygun.com/blog/popular-javascript-frameworks/" target="_blank">stąd</a>.
 
9. "Upiększanie" serwisu.
  * Wykonać > 10 modyfikacji serwisu, np. wg <a href="https://www.w3schools.com/howto/default.asp"> tych wskazówek</a>.

10. Praca z usługą typu PaaS (ang. Platform as a Service)
  * Stworzyć konto np. na heroku.com	
  * Zainstalować CLI dla Heroku (lub innej platformy);
  * Przesłać swój projekt na Heroku zgodnie z dokumentacją.

Zasady zaliczenia przedmiotu
======

1. Dowolny język do realizacji zadania.
2. Zadanie należy zrealizować do następnych zajęć - max. 5 punktów,
  * Tydzień opóźnienia w realizacji zadania - max. 3 punkty,
  * Przekroczenie obu terminów - max. 1 punkt.
3. Zrealizowane zadanie należy umieścić na portalu GitHub (lub BitBucket) i wysłać link do prowadzącego (Slack).
4. Zadanie należy zaprezentować osobiście prowadzącemu. 

Punkty i oceny
======

|    Liczba punktów    	| Ocena    |
|    :-------------:	| :-----:  |
|    45 - 50	        |     5    |
|    39 - 44	        |    4,5   |
|    34 - 38	        |     4    |
|    29 - 33	        |    3,5   |
|    25 - 28	        |     3    |
|     0 - 24	        |     2    |