import React from 'react';

export default function About(props){
    return(
        <div className ="container" style= {{color : props.mode ==='dark'?'white':'black'}}>
        <h1 className= "my-2" >About us</h1>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Whar is TextUtils?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The Sentence case text tool takes only the first letter of the first word of the sentence (or group of words), and proper nouns inputted into the text area and convert it to upper case.</strong> Sentence case also referred to as “down style” or “reference style” is used by newspaper publishers in the United States and the United Kingdom for titles, headings, and news headlines. Particularly, all publications in the United Kingdom widely adopt sentence cases in several publications: lists, bibliographies, reference lists; etcetera.
Your typical word processor can perform this task, but you can use this tool to check for any grammatical errors before submitting to your editor.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Features of TextUtils
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The lower case text tool takes every upper case letter inputted into the text area and converts all to lower case letters.</strong> Lower case letters are generally used for every letter in every word except for the first letter in words that begin sentences and proper nouns. Note that there are exceptions to this rule, specifically in words in which there is unusual capitalization; for example, eBay, JetBlue, iMac; etcetera.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        More Features
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The UPPER CASE text tool takes every lower case letter inputted into the text area and converts all to upper case letters.</strong>

Upper case letters or “ALL CAPS” find use in words or phrases a writer wants to emphasize, in titles on book covers; in advertisements, to highlight a message; in newspaper headlines, and on building plaques. They also indicate acronyms in texts.
      </div>
    </div>
  </div>
</div>
        </div>

    );
}