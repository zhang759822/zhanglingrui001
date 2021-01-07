#! /usr/bin/env node

function fun(params) {
    console.log(params);
}

fun(process.regv.slice(2));