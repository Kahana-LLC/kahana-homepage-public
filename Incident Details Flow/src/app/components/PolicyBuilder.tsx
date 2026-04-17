import { useState } from 'react';
import { ChevronLeft, Save, AlertCircle, Plus, X, Upload, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Condition {
  field: string;
  operator: string;
  value: string;
}

interface PolicyBuilderProps {
  onBack: () => void;
}

export function PolicyBuilder({ onBack }: PolicyBuilderProps) {
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [action, setAction] = useState('');
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [conditionMatch, setConditionMatch] = useState<'all' | 'any'>('all');
  const [createIncident, setCreateIncident] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [slackAlert, setSlackAlert] = useState(false);
  const [severity, setSeverity] = useState('medium');
  const [deviceScope, setDeviceScope] = useState('both');
  const [networkScope, setNetworkScope] = useState<string[]>([]);
  const [mode, setMode] = useState<'enforce' | 'report'>('enforce');
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showUploadBanner, setShowUploadBanner] = useState(true);

  const addCondition = () => {
    setConditions([...conditions, { field: '', operator: '', value: '' }]);
  };

  const removeCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (index: number, field: keyof Condition, value: string) => {
    const updated = [...conditions];
    updated[index][field] = value;
    setConditions(updated);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setShowUploadBanner(false);

      // Simulate auto-filling the form with parsed data
      // In a real implementation, this would parse the document
      setPolicyName('AI Usage Compliance Policy');
      setDescription('Ensures all AI tool usage complies with data classification and security requirements as outlined in company policy documents.');
      setPolicyType('ai-usage');
      setAction('block');
      setCreateIncident(true);
      setEmailAlert(true);
      setSeverity('high');
    }
  };

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 2000);
  };

  const isValid = policyName && description && policyType && action;

  return (
    <div className="flex-1 overflow-auto bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#71717a] hover:text-[#0a0a0a] transition-colors mb-4 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm">Back to Policies</span>
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl mb-1">New policy</h1>
              <p className="text-sm text-[#71717a]">Create a new security policy</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="px-4 py-2 text-sm font-medium border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!isValid}
                className="px-4 py-2 text-sm font-medium bg-[#0a0a0a] text-white rounded hover:bg-[#27272a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save policy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Upload Policy Agreement CTA */}
        <AnimatePresence>
          {showUploadBanner && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-r from-[#f0f9ff] to-[#eff6ff] border-2 border-[#bfdbfe] rounded-lg p-6 shadow-sm mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-[#1e3a8a] mb-1">
                    Quick setup with AI
                  </h3>
                  <p className="text-sm text-[#1e40af] mb-4">
                    Upload your policy agreement document (PDF, Word, or text file) and we'll automatically extract and fill in the policy details. You can review and edit everything before saving.
                  </p>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="px-4 py-2 text-sm font-medium bg-[#3b82f6] text-white rounded hover:bg-[#2563eb] transition-colors flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        <span>Upload policy document</span>
                      </div>
                    </label>
                    <button
                      onClick={() => setShowUploadBanner(false)}
                      className="px-4 py-2 text-sm font-medium text-[#1e40af] hover:text-[#1e3a8a] transition-colors"
                    >
                      Skip and fill manually
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowUploadBanner(false)}
                  className="p-1 hover:bg-[#dbeafe] rounded transition-colors"
                >
                  <X className="w-4 h-4 text-[#3b82f6]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* File Upload Success Indicator */}
        {uploadedFile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-4 shadow-sm mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#16a34a] flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#166534]">
                  Policy document uploaded successfully
                </div>
                <div className="text-xs text-[#15803d] mt-0.5">
                  {uploadedFile.name} • Form auto-filled • Review and edit as needed
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
            <h2 className="text-base font-medium mb-4">1. Basic Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Policy name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="text"
                  value={policyName}
                  onChange={(e) => setPolicyName(e.target.value)}
                  placeholder="e.g., Block confidential data to unapproved AI"
                  className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description <span className="text-[#dc2626]">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what this policy does and when it should trigger..."
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Policy type <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={policyType}
                  onChange={(e) => setPolicyType(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                >
                  <option value="">Select type</option>
                  <option value="ai-usage">AI usage</option>
                  <option value="data-loss">Data loss prevention</option>
                  <option value="access-control">Access control</option>
                  <option value="monitoring">Monitoring</option>
                </select>
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-medium">2. Conditions</h2>
                <p className="text-xs text-[#71717a] mt-0.5">When should this policy apply?</p>
              </div>
              <button
                onClick={addCondition}
                className="px-3 py-1.5 text-xs font-medium border border-[#e4e4e7] rounded hover:bg-[#f4f4f5] transition-colors flex items-center gap-2"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add condition</span>
              </button>
            </div>

            {conditions.length === 0 ? (
              <div className="border-2 border-dashed border-[#e4e4e7] rounded-lg p-8 text-center">
                <AlertCircle className="w-8 h-8 text-[#d4d4d8] mx-auto mb-2" />
                <p className="text-sm text-[#71717a]">No conditions added yet</p>
                <p className="text-xs text-[#a1a1aa] mt-1">
                  Add conditions to define when this policy triggers
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  {conditions.map((condition, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 items-start p-3 border border-[#e4e4e7] rounded bg-[#fafafa]"
                    >
                      <div className="flex-1 grid grid-cols-3 gap-3">
                        <select
                          value={condition.field}
                          onChange={(e) => updateCondition(index, 'field', e.target.value)}
                          className="px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                        >
                          <option value="">Select field</option>
                          <option value="user-group">User group</option>
                          <option value="app-category">App category</option>
                          <option value="app-status">App status</option>
                          <option value="data-classification">Data classification</option>
                          <option value="action">Action</option>
                          <option value="device-type">Device type</option>
                          <option value="network-type">Network type</option>
                        </select>

                        <select
                          value={condition.operator}
                          onChange={(e) => updateCondition(index, 'operator', e.target.value)}
                          className="px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                        >
                          <option value="">Operator</option>
                          <option value="is">is</option>
                          <option value="is-not">is not</option>
                          <option value="contains">contains</option>
                          <option value="not-contains">does not contain</option>
                        </select>

                        <input
                          type="text"
                          value={condition.value}
                          onChange={(e) => updateCondition(index, 'value', e.target.value)}
                          placeholder="Enter value"
                          className="px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                        />
                      </div>

                      <button
                        onClick={() => removeCondition(index)}
                        className="p-2 hover:bg-[#fef2f2] rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-[#dc2626]" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#e4e4e7]">
                  <span className="text-xs text-[#71717a]">Match:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setConditionMatch('all')}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                        conditionMatch === 'all'
                          ? 'bg-[#0a0a0a] text-white'
                          : 'bg-[#f4f4f5] text-[#71717a] hover:bg-[#e4e4e7]'
                      }`}
                    >
                      All conditions
                    </button>
                    <button
                      onClick={() => setConditionMatch('any')}
                      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                        conditionMatch === 'any'
                          ? 'bg-[#0a0a0a] text-white'
                          : 'bg-[#f4f4f5] text-[#71717a] hover:bg-[#e4e4e7]'
                      }`}
                    >
                      Any condition
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
            <h2 className="text-base font-medium mb-4">3. Actions</h2>
            <p className="text-xs text-[#71717a] mb-4">What should happen?</p>

            <div className="space-y-3 mb-4">
              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                <input
                  type="radio"
                  name="action"
                  value="allow-and-log"
                  checked={action === 'allow-and-log'}
                  onChange={(e) => setAction(e.target.value)}
                  className="mt-0.5 w-4 h-4"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Allow and log</div>
                  <div className="text-xs text-[#71717a] mt-0.5">
                    Permit the action but record it for audit purposes
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                <input
                  type="radio"
                  name="action"
                  value="allow-with-warning"
                  checked={action === 'allow-with-warning'}
                  onChange={(e) => setAction(e.target.value)}
                  className="mt-0.5 w-4 h-4"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Allow with warning</div>
                  <div className="text-xs text-[#71717a] mt-0.5">
                    Show a warning to the user but allow the action to proceed
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                <input
                  type="radio"
                  name="action"
                  value="block"
                  checked={action === 'block'}
                  onChange={(e) => setAction(e.target.value)}
                  className="mt-0.5 w-4 h-4"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Block</div>
                  <div className="text-xs text-[#71717a] mt-0.5">
                    Prevent the action from being completed
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                <input
                  type="radio"
                  name="action"
                  value="require-justification"
                  checked={action === 'require-justification'}
                  onChange={(e) => setAction(e.target.value)}
                  className="mt-0.5 w-4 h-4"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">Block and require justification</div>
                  <div className="text-xs text-[#71717a] mt-0.5">
                    Block the action and ask the user to provide a business reason
                  </div>
                </div>
              </label>
            </div>

            <div className="pt-4 border-t border-[#e4e4e7] space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={createIncident}
                  onChange={(e) => setCreateIncident(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e4e4e7] text-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/20"
                />
                <span className="text-sm">Create incident</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlert}
                  onChange={(e) => setEmailAlert(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e4e4e7] text-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/20"
                />
                <span className="text-sm">Send alert to email</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={slackAlert}
                  onChange={(e) => setSlackAlert(e.target.checked)}
                  className="w-4 h-4 rounded border-[#e4e4e7] text-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/20"
                />
                <span className="text-sm">Send alert to Slack</span>
              </label>

              <div>
                <label className="block text-sm font-medium mb-2">Severity</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scope & Mode */}
          <div className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm">
            <h2 className="text-base font-medium mb-4">4. Scope & Mode</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Device types</label>
                <select
                  value={deviceScope}
                  onChange={(e) => setDeviceScope(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#e4e4e7] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:border-[#0a0a0a]"
                >
                  <option value="both">Both managed and unmanaged</option>
                  <option value="managed">Managed only</option>
                  <option value="unmanaged">Unmanaged only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Networks</label>
                <div className="space-y-2">
                  {['corporate', 'vpn', 'public-wifi'].map((network) => (
                    <label key={network} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={networkScope.includes(network)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNetworkScope([...networkScope, network]);
                          } else {
                            setNetworkScope(networkScope.filter((n) => n !== network));
                          }
                        }}
                        className="w-4 h-4 rounded border-[#e4e4e7] text-[#0a0a0a] focus:ring-2 focus:ring-[#0a0a0a]/20"
                      />
                      <span className="text-sm capitalize">{network.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e4e4e7]">
                <label className="block text-sm font-medium mb-3">Mode</label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                    <input
                      type="radio"
                      name="mode"
                      value="enforce"
                      checked={mode === 'enforce'}
                      onChange={(e) => setMode(e.target.value as 'enforce' | 'report')}
                      className="mt-0.5 w-4 h-4"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Enforce</div>
                      <div className="text-xs text-[#71717a] mt-0.5">
                        Apply this policy actively and take configured actions
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group p-3 border border-[#e4e4e7] rounded hover:bg-[#fafafa] transition-colors">
                    <input
                      type="radio"
                      name="mode"
                      value="report"
                      checked={mode === 'report'}
                      onChange={(e) => setMode(e.target.value as 'enforce' | 'report')}
                      className="mt-0.5 w-4 h-4"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Report-only (monitor only)</div>
                      <div className="text-xs text-[#71717a] mt-0.5">
                        Log matches without taking action - useful for testing
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          {isValid && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-[#e4e4e7] rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-base font-medium mb-4">5. Preview</h2>
              <div className="p-4 bg-[#fafafa] border border-[#e4e4e7] rounded text-sm text-[#52525b] leading-relaxed">
                <strong className="text-[#0a0a0a]">Example:</strong> {policyName && description ? (
                  <>
                    When {conditions.length > 0 && `${conditionMatch === 'all' ? 'all' : 'any'} of the specified conditions are met`}
                    {conditions.length === 0 && 'conditions are met'}, the system will{' '}
                    <strong className="text-[#0a0a0a]">{action.replace('-', ' ')}</strong>
                    {createIncident && ', create an incident'}
                    {(emailAlert || slackAlert) && ', and send '}
                    {emailAlert && slackAlert && 'email and Slack alerts'}
                    {emailAlert && !slackAlert && 'an email alert'}
                    {!emailAlert && slackAlert && 'a Slack alert'}
                    {' with '}
                    <strong className="text-[#0a0a0a]">{severity}</strong> severity
                    {mode === 'report' && ' (report-only mode - no actions will be enforced)'}.
                  </>
                ) : (
                  'Complete the form to see a preview of your policy'
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 right-6 bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#16a34a] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#166534]">Policy saved successfully!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
