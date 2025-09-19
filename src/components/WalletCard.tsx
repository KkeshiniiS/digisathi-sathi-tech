import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Send, QrCode, Plus } from "lucide-react";
import { useState } from "react";

export const WalletCard = () => {
  const [balance, setBalance] = useState(1250);

  return (
    <Card className="p-6 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Wallet className="w-6 h-6" />
          <h2 className="text-xl font-semibold">My Wallet</h2>
        </div>
        <Button variant="outline" size="sm" className="text-primary bg-white hover:bg-gray-100">
          <Plus className="w-4 h-4 mr-1" />
          Add Money
        </Button>
      </div>
      
      <div className="mb-6">
        <p className="text-sm opacity-90 mb-1">Available Balance</p>
        <p className="text-3xl font-bold">₹{balance.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          className="text-primary bg-white hover:bg-gray-100"
          onClick={() => {
            // Simulate sending money
            setBalance(prev => prev - 100);
          }}
        >
          <Send className="w-4 h-4 mr-2" />
          Send Money
        </Button>
        <Button 
          variant="outline" 
          className="text-primary bg-white hover:bg-gray-100"
        >
          <QrCode className="w-4 h-4 mr-2" />
          Scan & Pay
        </Button>
      </div>
    </Card>
  );
};