#include "cs50.h"
#include<stdio.h>
// learning c https://www.youtube.com/watch?v=zYierUhIFNQ
// to run the program type "make intro"
int main(void){
    char c = getchar();
    if(c=='y'){
        printf("Agreed.\n");
    }
    else if (c == 'n'){
        printf("Not agreed.\n");
    }
}