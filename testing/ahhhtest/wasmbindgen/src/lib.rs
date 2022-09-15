use wasm_bindgen::prelude::*;
mod guess;

#[wasm_bindgen]
extern{
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str){
    alert(&format!("hey, {}", name));
}

#[wasm_bindgen]
pub fn makeGuess(guess: i32, number: i32){
    let correct = guess::guessLogic(guess, number);
    if correct{
        alert("you've done it");
        return
    }
    alert("that's not it...");
}

