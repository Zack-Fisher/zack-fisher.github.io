use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

fn game_state(state: &str){
    for name in &["wmap", "explore", "battle", "room", "cutscene"]{
        match name{

        }
    }
}