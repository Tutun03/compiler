window.onload = cBoil;
let editor;
let getVal="world";
let btnRun=document.getElementsByClassName("bt-run");


function runCode(){
    // let colorBcg = document.body.style.backgroundColor = "red";
    // console.log(colorBcg); // This will now print "red"
    // window.print();
}
function cliked(){
    let dropDown = document.getElementById("dropItems");
    let selectVal = dropDown.value;
    if(selectVal == "c"){
        if(selectVal!=getVal){
            cBoil();
            getVal=selectVal;
            
        }
    }
    else if(selectVal=="cpp"){
        if(selectVal!=getVal){
            cppBoil();
            getVal=selectVal;
        }
    }
    else if(selectVal=="java"){
        if(selectVal!=getVal){
            javaBoil();
            getVal=selectVal;
        }
    }
    else if(selectVal=="python"){
        if(selectVal!=getVal){
            pythonBoil();
            getVal=selectVal;
        }
    }
    else if(selectVal=="cHash"){
        if(selectVal!=getVal){
            cHashBoil();
            getVal=selectVal;
        }
    }
    else if(selectVal=="scala"){
        if(selectVal!=getVal){
            scalaBoil();
            getVal=selectVal;
        }
    }
}



function cBoil() {                
    if (!editor) {
        editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
            mode: 'text/x-csrc',
            theme: "dracula",
            lineNumbers: true,
            autoCloseBrackets: true,
        });
    } else {
        editor.setOption('mode', 'text/x-csrc');
    }
    editor.setValue('');
    editor.setValue(
        `#include<stdio.h>
        
        int main(){
            printf("Hello World");
            return 0;
        }`);
    }
    
    
    
    function cppBoil() {
        if (!editor) {
            let editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
                mode: 'text/x-c++src',
                theme: "dracula",
                lineNumbers: true,
                autoCloseBrackets: true,
            });
        } 
        else {
            editor.setOption('mode', 'text/x-c++src');
        }
        editor.setValue('');
        editor.setValue(
            `#include<iostream>
            
            int main(){
                cout<<"Hello World"<<endl;
                return 0;
            }`);
        }
        
        
        
        function javaBoil() {                
            if (!editor) {
                editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
                    mode: 'text/x-java',
                    theme: "dracula",
                    lineNumbers: true,
                    autoCloseBrackets: true,
                });
            } else {
                editor.setOption('mode', 'text/x-java');
            }
            editor.setValue('');
            editor.setValue(
                `class Main {
                    public static void main(String[] args) {
                        System.out.println("Hello, World!");
                    }
                }`);
            }
            
            
            function pythonBoil() {                
                if (!editor) {
                    editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
                        mode: 'text/x-ruby',
                        theme: "dracula",
                        lineNumbers: true,
                        autoCloseBrackets: true,
                    });
                } else {
                    editor.setOption('mode', 'text/x-python');
                }
                editor.setValue('');
                editor.setValue(`print('Hello World')`);
            }
            
            
            function cHashBoil() {                
                if (!editor) {
                    editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
                        mode: 'text/x-csharp',
                        theme: "dracula",
                        lineNumbers: true,
                        autoCloseBrackets: true,
                    });
                } else {
                    editor.setOption('mode', 'text/x-csharp');
                }
                editor.setValue('');
                editor.setValue(
                    `using System;
                    
                    class Program
                    {
                        static void Main(string[] args)
                        {
        Console.WriteLine("Hello World!");
    }
}`);
}


function scalaBoil() {                
    if (!editor) {
        editor = CodeMirror.fromTextArea(document.getElementById('inputText'), {
            mode: 'text/x-scala',
            theme: "dracula",
            lineNumbers: true,
            autoCloseBrackets: true,
        });
    } else {
        editor.setOption('mode', 'text/x-scala');
    }
    editor.setValue('');
    editor.setValue(
`object MyObject {
    def main(args: Array[String]): Unit = {
        println("Hello, World!")
    }
}`);
}

var count=1;
let bodyColor;

function darkModeLightMode(){
    if(count%2!=0){
        bodyColor= document.body.style.backgroundColor = "#f5f5f5";
        editor.setOption('theme','yeti');
        let nameOfButton= document.getElementById("darkMode-bt");
        nameOfButton.innerHTML="Dark";
        document.querySelector(".dropDown-div").style.backgroundColor='#e5e1db'
        document.querySelector(".col-2").style.backgroundColor="#e5e1db";
        document.querySelector(".textInp").style.color="black";
        document.querySelector(".textOut").style.color="black";
        // console.log(1);]
    }
    else{
        bodyColor= document.body.style.backgroundColor = "#10181c";
        editor.setOption('theme','dracula');
        let nameOfButton= document.getElementById("darkMode-bt");
        nameOfButton.innerHTML="Light";
        document.querySelector(".dropDown-div").style.backgroundColor='#28262e'
        document.querySelector(".col-2").style.backgroundColor="#28262e";
        document.querySelector(".textInp").style.color="#b4e2f5";
        document.querySelector(".textOut").style.color="#b4e2f5";
    }
    count++;
}