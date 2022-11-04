#include<cs50.h>
#include<stdio.h>
// learning c https://www.youtube.com/watch?v=zYierUhIFNQ
int main(void){
    char c = get_char("Do you agree?");
    if(c=='y'){
        printf("Agreed.\n");
    }
    else if (c == 'n'){
        printf("Not agreed.\n");
    }
}