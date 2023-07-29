'use strict';

/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). 
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/


/* 
Zadanie 1.2 
Stwórz funkcje, która przyjmuje jako parametr obiekt w postaci:
{
  idUser: (pole typu int)
  title: (pole typu string)
  completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetl w konsoli komunikat 'Dodano' i id dodanego obiektu. W przeciwnym wypadku wypisz błąd.
*/