/* Defines the player entity */
export class IPlayer {
    playerId: number;
    playerAccountNumber: string;
    balance: number;
    pendingbalance: number;
    lastPlayDatetime: string;
    isEditMode: Boolean;
    isActive: Boolean;

    // constructor() {
    //     this.isActive = true;
    //     this.isEditMode = false;
    // }
}
