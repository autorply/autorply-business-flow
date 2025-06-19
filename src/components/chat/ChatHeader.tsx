
import { Phone, Video, MoreVertical } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="bg-[#f7f3f0] text-gray-800 px-4 py-4 pt-8 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center space-x-3 space-x-reverse">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
          <img 
            src="https://autorply.sa/assets/img/logo_64.svg" 
            alt="Autorply" 
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-gray-900">Autorply</h3>
          <p className="text-xs text-gray-500">متصل الآن</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 space-x-reverse text-[#00b386]">
        <Video className="w-5 h-5" />
        <Phone className="w-5 h-5" />
        <MoreVertical className="w-5 h-5" />
      </div>
    </div>
  );
};

export default ChatHeader;
