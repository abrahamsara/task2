function reverser(str){
    var listofchsrs = str.split('')
    var reverselistofchars = listofchsrs.reverse()
    var reverser
    return reverser
}
console.log(reverser('hello'))


function ispalindrome(str){
    var reverse = reversestr(str)


    if (str===reverser){
        return true
    }


    function convertdatatostr(date){

        var datestr = {days: '', month: '', year: '' }

        if (date.day<10){
            datestr.day='0'+days.day;
        }
        else{
            datestr.day = day.day.tostring()

            }
            if(date.month<10){
                datestr.month = '0'+ date.month
            }
            else{
                datestr.month = date.day.tostring()

            }
            var ddmmyyyy = datestr.day + datestr.month+ datestr.year
            var mmddyyyy = datestr.month+date+ datestr.day+datestr.year
            var yyyymmdd= datestr.year+datestr.month+datestr.day
            var ddmmyy = datestr.day+datestr.month+datestr.day
            var mmddyy = datestr.month+datestr.day+datestr.year
            var yymmdd = datestr.year.slice(-2)+datestr.month+datestr.day


            
            return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]

            var date = {
                day:5,
                month: 9,
                year: 2020

            



            }

            console.log(convertdatatostr(date))


        
    }
}