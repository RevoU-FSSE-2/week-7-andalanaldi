[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/jmQFTmFT)

# Week 7 Assignment - Make Finance Track Web App and Deploy into https://fire-wk.netlify.app/

https://fire-wk.netlify.app/

First thing first this documentation just posting the site link first just to be safe. The documentation will be updated later on.

contact author : andalanaldi@gmail.com

## Update 1 : Short description about Finance Track Web App and Its Typescript Wirting Process

This week 7 assignment from PT. Revolusi Cita Edukasi (RevoU) ask to create a finance track web app through Typescript as a superset of Javascript programming langguage to prevent error in Javascript. Author create a finance track app with some differences from the example. The feature differences are described as below :

### About the Finance Track Web App - Fire with Kuru

1. More Option on Transaction Selection

Not only cash in and cash out. Author adds various income types into cash in category such as salary, dividend, royalty, commission, capital gain as example and education, F & B, charity, as cash out.

2. Add currency format on template literal after click button submission

Author follow example for this week 7 from https://revou-barcelona-week-7.netlify.app/ nevertheless, author needs to modify codes in Typescript. especially adding currecy format for amount in IDR. For instance, here is short Typescript code to do that:
#### Typescript code for currency format
```
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  });

class Quote {
    private customer: string;
    private deti: string;
    private iamount: number;

    constructor(customer: string, deti: string, iamount: number) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // Format the iamount as currency
        const formattedAmount = formatter.format(this.iamount);
        // return `${this.client} owned Rp${this.amount} for ${this.details}`;
        return `You have ${this.customer} as much as ${formattedAmount} for month of ${this.deti}`;
    }
}
```
Hence, the format will net be just numeric in literal template but it would be in currency format. Here is the example:

_You have Salary from RevoU as much as 2000000 IDR for month of July_
**instead it would be appear like this:**
_You have Salary from RevoU as much as IDR 2,000,000.00 for month of July_

3. Add a jargon / slogan or Buzzword

Author add Buzzword in the header to differentiate this finance track web app from other web app. Hence, author use FIRE buzzword which stands for **Financial Independence and Retired Early (FIRE)**. Author add Kuru - kuru, a character from Honkai Star Rail, a Mihoyo game to just add spice for it. Hopefully, author could add some Kuru - Kuru pictures with money arround this app later on.

### About Typescript Writing Process

Before start to write Typescript codes, Author needs to set up Typescript first on IDE (Integrated Development Environment) which is Visual Studio Code (VS Code). Nevertheless, there are some steps to be prepared first because Author uses Windows 10 as his Operating System in his laptop.

1. Download and Install Node.js
2. Check is version on VS Code Powershell
3. Install npm, yarn or pnpm first
#### npm
```
npm init

npm install
```
4. Install typescript using npm
#### Install typescript
```
npm install -g typescript
```
5. Authorize typescript first through windows terminal or command prompt and run them as administrator
#### Authorize typescript
```
set-executionpolicy remotesigned
```
6. if a circle blue or empty circle symbol on the left side of VS code powershell is appeared it means that typescript command in powershell has already authorized.
7. Start to write typescript codes, save it, compiled, generate tsconfig file, and run to test the code through some command on powerhsell.
#### Typescript writing and testing process
```
tsc app.ts

tsc --init

tsc --watch
```
Those command that is written on powershell generates app.js file as compiled by transcript and tsconfig.ts. the last command is useful for testing on localhost whether our app has already functioned well or non in the browser.
8. If the app has no problem, the codes could be pushed into github and deployed into netlify.

## Update 2 : Troubleshoot, limitations and plan on the features

Of course, author found some issues and author still has limitations. here are some descriptions below.

### Troubleshoot

Author has export problem on typescript and javascript. There are some suggestions from instructor and team leader 4 to modify module commonjs into just a comment on tsconfig, delete *.js on typescript file, check package.json file generated from npm init whether there is any installation or dependencies. Nevertheless, those ways has not worked in favorable expectation yet.

There is another options such as configure plug in on the browser. Nevertheless, for now author temporarily combine all typescript files into one *app.ts file to prevent error on export.

Other troubleshoot is that Author forgot to delete closing form tag </form> that prevent data form being submitted. Thanks to team leader to reminded author for that. the other thing is that author use **ariaValueText** and **ariaValueNow** on tyepscript hence it would produce undefined and NaN display in browser. Those has different function which is for accessibility or taking labels, different from **value** or **valueAsNumber** that take values. Well, author need to explore more on what function for aria used for.

### Limitations and plan on the features

Author still needs help from https://chat.openai.com/ and https://app.leonardo.ai/ to fix errors in typescript and to genereate Kuru - kuru images. Yet for Kuru - kuru images are not deployed yet into the apps. Author plans to add features such as:

1. Doughnut chart to track finance.
2. Stock price watch to estimate assets value.

Nevertheless, maybe the time is not enough to do that hopefully it could be realized thourgh https://www.chartjs.org/ later on.

If you have any questions or want any discussion please contact author at andalanaldi@gmail.com. Thank you for your attention.

