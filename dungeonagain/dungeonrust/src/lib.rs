use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn return_thing() -> i32 {
    2
}

fn game_state(state: &str){
    for name in &["wmap", "explore", "battle", "room", "cutscene"]{
        match name{
            _ => (),
        }
    }
}