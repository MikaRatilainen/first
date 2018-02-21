import React from 'react';
import ReverseString from './text/reverse_string.js';
import PigLatin from './text/pig_latin.js';
import CountVowels from './text/count_vowels.js';

class Text extends React.Component {
	render() {
		return (
			<div>
				<h1>Задачи с текстами</h1>
				 <table>
	   				 <tbody>
	    				<tr>
	      					<td><ReverseString /></td>
	      					<td><PigLatin /></td>
	      					<td><CountVowels /></td>
	    				</tr>
	    			</tbody>
	  			</table>
  			</div>
			);
	}
}

export default Text;

