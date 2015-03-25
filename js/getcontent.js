/* 
  Dependencies jQuery 1.7+ ( $.text() and $.get() )
  Use: Get the value of a DOM element without having to know the type of element.
  @parameters: obj (DOM element), param (boolean:true - get text or string:DOM Attribute)
  More types to come in the future.
*/

var getContent		= function(obj, param)
{
		obj			= $(obj).get(0);
		
	if(!obj || !obj.tagName) return null;
	
	if(typeof param === 'string' && obj.getAttribute(param)) return obj.getAttribute(param);
		
	var _tagName	= obj.tagName.toLowerCase();
	var _type		= obj.getAttribute('type');
	var _value		= '';
	var getText		= param === true ? true : false;
	
	switch(_tagName)
	{
		case 'input':
			if(_type === 'checkbox' || _type === 'radio') _value = obj.checked ? 1 : '';
			else _value = obj.value;
		break;
		
		case 'textarea':
			_value = obj.value;
		break;
		
		case 'select':
			_value = obj.options[obj.selectedIndex].value;
		break;
		
		case 'img':
			_value = obj.src;
		break;
		
		case 'a':
			_value = obj.href;
		break;
		
		case 'iframe':
			_value = obj.src;
		break;
		
		default:
			_value = getText ? $(obj).text() : obj.innerHTML;
	}
	
	return _value.trim();		
};
