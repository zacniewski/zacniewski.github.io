---
title: "Wstęp do Data Science"
collection: teaching
type: "Wykłady i laboratoria"
permalink: /teaching/2019-data-science-intro
venue: "AMW, WEM"
date: 2019-10-06
location: "Gdynia, Polska"
---

Zagadnienia i sposób zaliczenia:



Tematy zadań
======

1. Powtórka operacji na tablicach i macierzach (wskazane Numpy).
  * utwórz tablicę zawierającą 10 zer,
  * utwórz tablicę zawierającą 10 piątek,
  * utwórz tablicę zawierającą liczby od 10 do 50,
  * utwórz macierz (tablica wielowymiarowa) o wymiarach 3x3 zawierającą liczby od 0 do 8,
  * utwórz macierz jednostkową o wymiarach 3x3,
  * utwórz macierz o wymiarach 5x5 zawierającą liczby z dystrybucji normalnej (Gaussa),
  * utwórz macierz o wymiarach 10x10 zawierającą liczby od 0,01 do 1 z krokiem 0,01,
  * utwórz tablicę zawierającą 20 liniowo rozłożonych liczb między 0 a 1 (włącznie z 0 i 1),
  * utwórz tablicę zawierającą losowe liczby z przedziału (1, 25), następnie zamień ją na macierz o wymiarach 5 x 5 z tymi samymi liczbami:
        * oblicz sumę wszystkich liczb w ww. macierzy,
        * oblicz średnią wszystkich liczb w ww. macierzy,
        * oblicz standardową dewiację dla liczb w ww. macierzy,
        * oblicz sumę każdej kolumny ww. macierzy i zapisz ją do tablicy.
  * utwórz macierz o wymiarach 5x5 zawierającą losowe liczby z przedziału (0, 100) i:
        * oblicz medianę tych liczb,
        * znajdź najmniejszą liczbę tej macierzy,
        * znajdź największą liczbę tej macierzy.
  * utwórz macierz o wymiarach różnych od siebie i większych od 1, zawierającą losowe liczby z przedziału (0, 100) i dokonaj jej transpozycji,
  * utwórz dwie macierze o odpowiednich wymiarach (doczytać), większych od 2 i dodaj je do siebie,
  * utwórz dwie macierze o odpowiednich wymiarach (doczytać) różnych od siebie i większych od 2, a następnie pomnóż je przez siebie za pomocą dwóch różnych funkcji (np. 'matmul' i 'multiply'),
  * ściąga do pakietu Numpy - <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Numpy_Python_Cheat_Sheet.pdf" target="_blank">link</a>
  * dla spóźnialskich: należy krótko opisać i uruchomić wszystkie funkcje (od 'add' do 'lcm') z sekcji 'Math operations' na <a href="https://docs.scipy.org/doc/numpy/reference/ufuncs.html" target="_blank">stronie</a>.

2. Analiza danych z pakietem Pandas
  * instalacja: ```pip install pandas --user```
  * oficjalna ściąga - <a href="https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf" target="_blank">tutaj</a>,
  * krótki wstęp do Pandas - <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html" target="_blank">tutaj</a>,
  * podstawowe struktury danych w Pandas - <a href="https://pandas.pydata.org/pandas-docs/stable/getting_started/dsintro.html#dsintro" target="_blank">tutaj</a> (szybkie zapoznanie się ze strukturami Series i DataFrame zawartymi w tym linku jest wkazane),
  * roboczy plik tekstowy 'samochody1tys.csv', zawierający dane z 1000 ogłoszeń motoryzacyjnych, dostępny jest na Slacku. Dane składają się z 1000 rekordów. Każdy rekord dotyczy jednego ogłoszenia motoryzacyjnego i zawiera następujące informacje: identyfikator ogłoszenia, marka samochodu, model samochodu, rok produkcji, rodzaj silnika, pojemność silnika, przebieg samochodu, cena, województwo.
  * należy przerobić krótki wstęp do Pandas (link powyżej) i tam gdzie się da należy użyć danych z pliku roboczego,
  * do wczytania danych korzystamy z funkcji ```read_csv```, 
  * przed każdą operacją (zbiorem operacji) konieczna jest linia z komentarzem po polsku, a w niej opis co zamierzamy zrobić,
  * wyniki zapisujemy w pliku .ipynb.
  * dla spóźnialskich:

3. Matplotlib
  * instalacja: ```pip install matplotlib --user```
  * krótki wstęp po polsku - <a href="https://python101.readthedocs.io/pl/latest/pylab/" target="_blank">tutaj</a>,
  * ściąga - <a href="https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf" target="_blank">tutaj</a>,
  * utwórz wykresy funkcji liniowej, kwadratowej, trzeciego rzędu oraz wybranej funkcji trygonometrycznej zgodnie z <a href="https://matplotlib.org/tutorials/introductory/usage.html#sphx-glr-tutorials-introductory-usage-py"> wytycznymi</a>,
  * utwórz wykres słupkowy (bar chart) na podstawie danych z pliku 'samochody1tys.csv' (lab. nr 2). Może to być np. liczebność danej marki samochodu. Można użyć pakietów numpy i pandas, jeśli jest taka potrzeba,
  * utwórz wykres kołowy (pie chart) na podstawie ww. pliku, ale z innymi danymi niż do wykresu słupkowego,
  * utwórz histogram na podstawie ww. pliku, ale z innymi danymi niż poprzednie,
  * wszystkie wykresy powinny być opisane wg prawideł tworzenia wykresów (tytuły, opisy osi, jednostki, itp. itd.), 
  * proszę pamiętać o komentarzach przed użyciem danej funkcji,


4. Praca z danymi - web scraping i zapis do Excela
  * instalacja Beautiful Soup: ```pip install beautifulsoup4 --user``` (do web scrapingu),
  * dokumentacja BS4 - <a href="https://beautiful-soup-4.readthedocs.io/en/latest/" target="_blank">tutaj</a>,
  * instalacja openpyxl: ```pip install openpyxl --user``` (do pracy z arkuszami Excela),
  * dokumentacja openpyxl - <a href="https://openpyxl.readthedocs.io/en/stable/index.html" target="_blank">tutaj</a>,
  * wstęp do openpyxl - <a href="https://openpyxl.readthedocs.io/en/stable/tutorial.html" target="_blank">tutaj</a>,
  * wstęp do web scrapingu za pomocą BS4 - <a href="https://www.kodolamacz.pl/blog/wyzwanie-python-7-web-scraping/" target="_blank">tutaj</a>,
  * nie korzystamy z dystrybucji Anaconda! Można zainstalować pakiet requests za pomocą pip'a,
  * utwórz za pomocą openpyxl trzy arkusze o nazwach "Giełda", "Linki" i "Filmweb" (pokazane we wstępie),
  * pod adresem https://stooq.pl/q/?s=cdr znajdziesz notowania giełdowe spółki CD Projekt Red, 
        * wygeneruj 5 losowych kodów 3-literowych,
        * generowane są trzyliterowe kody do momentu aż trafi się 5, które istnieją. 
        * inna opcja - na  stronie z błędem 404 (dla nieistniejącego kodu) jest link do najbardziej pasującego rekordu, można go wyciągnąć za pomocą BS4 i stworzyć kolejne zapytanie,
        * napisz kod, który dla wygenerowanych wyżej trzyliterowych kodów spółki wyświetli ich aktualną cenę (Kurs), procentową zmianę (Zmiana) oraz liczbę transakcji (Transakcje),
        * zapisz wyniki do arkusza 'Giełda',
  * dla swojej ulubionej strony internetowej napisz kod, który połączy się ze stroną, znajdzie wszystkie linki na stronie (znacznik 'a' posiadający atrybut 'href'), a następnie zapisze je do arkusza 'Linki', 
  * dla ustalonego linku do filmu na Filmwebie, np. https://www.filmweb.pl/film/To%3A+Rozdzia%C5%82+2-2019-793838, napisz kod, który zwróci:
        * reżysera,
        * datę premiery,
        * boxoffice,
        * ocenę filmu.    
        * zapisz uzyskane wyniki do arkusza 'Filmweb'
  * zapisz plik z wynikami trzech zadań w formie 'nazwisko-grupa.xlsx'.

5. Regresja liniowa z scikit-learn
  * instalacja: ```pip install scikit-learn --user```,
  * krótko o Machine Learning - <a href="https://www.statystyczny.pl/co-to-jest-machine-learning/" target="_blank">link nr 1 tutaj</a>,
  * kilka słów o regresji liniowej - <a href="https://www.statystyczny.pl/regresja-liniowa/" target="_blank">link nr 2 tutaj</a>,
  * wstęp do regresji liniowej z przykładami w scikit-learn <a href="https://ksopyla.com/machine-learning/modele-regresji-liniowej-z-scikit-learn/" target="_blank"> link nr 3 tutaj </a>,
  * o zastosowaniu regresji liniowej - <a href="https://matematyka.poznan.pl/artykul/regresja-liniowa-czyli-o-zastosowaniu-funkcji-liniowej-w-analizie-statystycznej/" target="_blank"> link nr 4 tutaj</a>,
  * krótko o prostej regresji - <a href="https://cyrkiel.info/statystyka/prosta-regresji/" target="_blank">link nr 5 tutaj </a>,
  * w scikit-learn <a href="https://scikit-learn.org/stable/datasets/index.html" target="_blank">dostępne</a> są dwa proste zbiory treningowe dla regresji liniowej: 'diabetes' i 'boston',
  * korzystając z linka nr 3 należy:
        * opracować wizualizację dla zbioru 'boston',
        * porównać modele regresji liniowej dla zbioru 'diabetes',
  * opracować przykład z linka nr 2 z wykorzystaniem bibliotek Python'a,
  * opracować przykład z linka nr 4 z wykorzystaniem bibliotek Python'a,
  * wygenerować zbiór 100 punktów oraz obliczyć i wyświetlić dla nich prostą regresji (z wykorzystaniem bibliotek Python'a), dla wyższej oceny należy to zzadanie zrealizować wg kolejnych kroków z linka nr 5,
  * wszystkie wykresy powinny być opisane wg prawideł tworzenia wykresów (tytuły, opisy osi, jednostki, itp. itd.).

6. Klasyfikacja z użyciem z scikit-learn
  * w tej laborce tworzymy 3 odzielne notebooki - każdy dla jednego zadania,
  * zadanie nr 1: należy przerobić klasyczny przykład klasyfikacji (zbiór IRIS) - <a href="https://kssk.gitbook.io/msi/1.-klasyfikacja-jako-przyklad-rozpoznawania-wzorcow/1.1-struktura-zbioru-danych" target="_blank">link nr 1 tutaj </a>,
  * zadanie nr 2: należy przerobić pokazane przykłady klasyfikacji i wykonać wszystkie cztery wewnętrzne zadania - <a href="https://sebkaz.github.io/DataMining/05_Modelowanie_cw/" target="_blank">link nr 2 tutaj </a>,
  * zadanie nr 3: należy przerobić przykład klasyfikacji polskich tekstów - <a href="http://www.deepdata.pl/nlp-scikit-learn-klasyfikacja/przyklad-klasyfikacji-polskich-tekstow-czesc-1/" target="_blank">link nr 3 tutaj </a>,
  * proszę pamiętać o importach odpowiednich pakietów!

7. Prosta sieć neuronowa do implementacji funkcji logicznych
  * można wykonać to zadanie w dowolnym języku,
  * krótki wstęp do sieci neuronowych wraz z przykładami dotyczącymi funkcji logicznych - <a href="https://www.analyticsvidhya.com/blog/2016/03/introduction-deep-learning-fundamentals-neural-networks/" target="_blank">link nr 1 tutaj</a>,
  * należy zaimplementować bramki logiczne AND, OR, NOT za pomocą pojedynczego neurona (przykłady 1-3),
  * funkcja aktywacji <i>f</i> pokazana przed pierwszym przykładem jest wystarczająca,
  * należy zaimplementować bramki logiczne XOR i XNOR za pomocą sieci neuronów (dalsze przykłady),
  * można wykorzystać wartości wag i bias'ów podane na ww. stronie,
  * proszę pamiętać, że każdy neuron ma funkcję aktywacji,
  * w tabeli do każdego przykładu powinny znaleźć się:
        * wartości wejść,
        * wartości wag i biasów,
        * wartości sumy iloczynów wag i wejść,
        * wartości funkcji aktywacji neuronów (czyli ich wyjście),
  * model neuronu pokazano <a href="http://galaxy.uci.agh.edu.pl/~vlsi/AI/wstep/" target="_blank">tutaj</a>.

8. Algorytm k najbliższych sąsiadów
  * ..

9. Naiwny klasyfikator bayesowski
  * ..
10. Drzewa decyzyjne
  * ..

Zasady zaliczenia przedmiotu
======

1. Dowolny język do realizacji zadania. Aczkolwiek zalecany Python i jego biblioteki, takie jak Numpy, Scipy, Matplotlib, pandas itp.
  * idealny byłby Jupyter Notebook - <a href="https://www.dataquest.io/blog/jupyter-notebook-tutorial/">szybkie intro</a>
2. Zadanie należy zrealizować do następnych zajęć - max. 5 punktów,
  * Opóźnienie skutkuje wykonaniem części rozszerzonej danego zadania, która będzie określona przez prowadzącego,
  * Część rozszerzona będzie trudniejsza niż podstawowa i będzie konieczna rozmowa z prowadzącym o jej wykonaniu.
3. Zrealizowane zadanie należy umieścić na portalu GitHub (lub BitBucket) i wysłać link do repozytorium do prowadzącego (Slack).
4. Należy wykonać zrzuty ekranu z wynikami i również umieścić je w repozytorium.
5. Zadanie należy zaprezentować osobiście prowadzącemu (najlepiej na bieżących lub kolejnych zajęciach). 

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
