import { Subject } from 'rxjs/Rx';
class AlertService {
    public modal$ = new Subject();

    public show() {
        this.modal$.next(true);
    }

    public hide() {
        this.modal$.next(false);
    }
}
export default new AlertService();
