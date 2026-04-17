import { MessageSquare, Save } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function IncidentNotes() {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<Array<{ text: string; timestamp: string }>>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveNote = () => {
    if (note.trim()) {
      const timestamp = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setSavedNotes([{ text: note, timestamp }, ...savedNotes]);
      setNote('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-[#e4e4e7] rounded-lg p-5 shadow-sm">
      <div className="flex items-start gap-2 mb-4">
        <MessageSquare className="w-4 h-4 text-[#71717a] mt-0.5 flex-shrink-0" />
        <h3 className="text-base">Notes</h3>
      </div>

      <div className="space-y-3">
        {/* Saved Notes */}
        {savedNotes.length > 0 && (
          <div className="space-y-2 mb-3 pb-3 border-b border-[#e4e4e7]">
            {savedNotes.map((savedNote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-[#f4f4f5] rounded text-xs"
              >
                <div className="text-[#0a0a0a] mb-1">{savedNote.text}</div>
                <div className="text-[#71717a] font-mono">{savedNote.timestamp}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Textarea */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add comment or internal note..."
          rows={4}
          className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a] resize-none placeholder:text-[#a1a1aa]"
        />

        {/* Save Button */}
        <button
          onClick={handleSaveNote}
          disabled={!note.trim()}
          className="w-full px-3 py-2 text-sm font-medium bg-[#0a0a0a] text-white rounded hover:bg-[#27272a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save note</span>
        </button>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded text-xs text-[#166534] text-center"
            >
              Note saved successfully
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
