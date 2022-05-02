export class DateFormat {
    today = new Date();
    yesterday1 = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterday2 = new Date(Date.now() - 2000*60*60*24);
    yesterday3 = new Date(Date.now() - 3000*60*60*24);
    yesterday4 = new Date((new Date()).valueOf() - 4000*60*60*24);
    yesterday5 = new Date((new Date()).valueOf() - 5000*60*60*24);
  
    current_today = this.today.getFullYear() + "-"  + (this.today.getMonth() + 1) + "-" + this.today.getDate();
    current_yesterday = this.yesterday1.getFullYear() + "-"  + (this.yesterday1.getMonth() + 1) + "-" + this.yesterday1.getDate();
    current_yesterday2 = this.yesterday2.getFullYear() + "-"  + (this.yesterday2.getMonth() + 1) + "-" + this.yesterday2.getDate();
    current_yesterday3 = this.yesterday3.getFullYear() + "-"  + (this.yesterday3.getMonth() + 1) + "-" + this.yesterday3.getDate();
    current_yesterday4 = this.yesterday4.getFullYear() + "-"  + (this.yesterday4.getMonth() + 1) + "-" + this.yesterday4.getDate();
    current_yesterday5 = this.yesterday5.getFullYear() + "-"  + (this.yesterday5.getMonth() + 1) + "-" + this.yesterday5.getDate();

    constructor(){}
}