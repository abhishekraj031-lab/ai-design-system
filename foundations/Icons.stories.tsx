import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import * as LucideIcons from 'lucide-react'

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: { layout: 'fullscreen', docs: { canvas: { sourceState: 'hidden' } } },
}
export default meta
type Story = StoryObj

const ICON_CATEGORIES: { name: string; icons: string[] }[] = [
  { name: 'General', icons: ['Home','Search','Settings','User','Users','Bell','Calendar','Clock','MapPin','Globe','Phone','Mail','Camera','Image','Video','Music','Mic','Headphones','Wifi','Battery','Monitor','Smartphone','Laptop','Printer','Tv','Watch','Compass','Map','Navigation','Bookmark','Star','Heart','Award','Shield','Key','Tag','Flag','Gift','Package','Layers','Cpu','Code','Terminal','GitBranch','Database','Server','Cloud'] },
  { name: 'Actions', icons: ['Plus','Minus','X','Check','Edit','Edit2','Edit3','Trash','Trash2','Copy','Clipboard','Download','Upload','Share','Share2','RefreshCw','RefreshCcw','RotateCw','RotateCcw','Undo','Undo2','Redo','Redo2','Save','Send','Eye','EyeOff','Lock','Unlock','LogIn','LogOut','ZoomIn','ZoomOut','Move','Maximize','Minimize','Filter','SortAsc','SortDesc','Sliders','ToggleLeft','ToggleRight','MoreHorizontal','MoreVertical','Menu'] },
  { name: 'Charts', icons: ['BarChart','BarChart2','BarChart3','BarChart4','LineChart','PieChart','TrendingUp','TrendingDown','Activity','Percent','Sigma'] },
  { name: 'Communication', icons: ['Mail','MailOpen','Inbox','Send','MessageCircle','MessageSquare','Phone','PhoneCall','PhoneIncoming','PhoneOutgoing','PhoneMissed','PhoneOff','Voicemail','AtSign','Rss','Radio','Megaphone','Bell','BellOff','Reply','ReplyAll','Forward'] },
  { name: 'Productivity', icons: ['CheckSquare','Square','List','ListOrdered','ListChecks','Clipboard','ClipboardCheck','ClipboardList','Pencil','Pen','PenTool','Highlighter','Type','Bold','Italic','Underline','Strikethrough','AlignLeft','AlignCenter','AlignRight','AlignJustify','Calendar','Timer','AlarmClock','Hourglass','Target','Zap','Flame','Trophy','Medal'] },
  { name: 'Layout', icons: ['Layout','LayoutDashboard','LayoutGrid','LayoutList','LayoutPanelLeft','LayoutPanelRight','LayoutTemplate','Grid','Grid2x2','Grid3x3','Columns','Rows','Sidebar','Table','Table2','Kanban','Maximize2','Minimize2'] },
  { name: 'Finance', icons: ['DollarSign','Euro','PoundSterling','Bitcoin','CreditCard','Receipt','Wallet','PiggyBank','Banknote','Coins','Percent','Calculator','Hash','Infinity'] },
  { name: 'Status', icons: ['CheckCircle','CheckCircle2','XCircle','AlertCircle','AlertTriangle','AlertOctagon','Info','HelpCircle','Ban','PauseCircle','PlayCircle','StopCircle','Circle','Loader','Loader2','ShieldCheck','ShieldX','ShieldAlert','ThumbsUp','ThumbsDown','Smile','Frown','Meh'] },
  { name: 'Development', icons: ['Code','Code2','CodeXml','Terminal','GitBranch','GitCommit','GitMerge','GitPullRequest','GitFork','Github','Gitlab','Braces','Bug','Webhook','Binary','Variable','FunctionSquare','Regex','Package','PackageCheck','PackageOpen','Box','Boxes','Blocks'] },
  { name: 'Files', icons: ['File','FileText','FileImage','FileVideo','FileAudio','FileCode','FileArchive','FileCheck','FileX','FilePlus','FileMinus','Folder','FolderOpen','FolderClosed','FolderPlus','FolderMinus','FolderX','FolderCheck','Archive','HardDrive'] },
  { name: 'Time', icons: ['Clock','Calendar','AlarmClock','Timer','Watch','Hourglass','History'] },
  { name: 'Navigation', icons: ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','ArrowUpLeft','ArrowUpRight','ArrowDownLeft','ArrowDownRight','ChevronLeft','ChevronRight','ChevronUp','ChevronDown','ChevronsLeft','ChevronsRight','ChevronsUp','ChevronsDown','MoveLeft','MoveRight','MoveUp','MoveDown','Home','Navigation','Navigation2','Locate','Crosshair'] },
  { name: 'Weather', icons: ['Sun','Moon','Cloud','CloudSun','CloudMoon','CloudRain','CloudDrizzle','CloudSnow','CloudLightning','Wind','Umbrella','Thermometer','Droplets','Snowflake','Tornado','Rainbow','Sunset','Sunrise','Zap'] },
]

function toPascalCase(str: string) {
  return str.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

function IconGrid() {
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const q = search.toLowerCase().trim()

  const handleCopy = (name: string) => {
    navigator.clipboard?.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 1200)
  }

  // Get the lucide component — key is PascalCase
  const getIcon = (name: string) => {
    const Icon = (LucideIcons as Record<string, unknown>)[name] as React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }> | undefined
    return Icon || null
  }

  const filtered = ICON_CATEGORIES.map(cat => ({
    ...cat,
    icons: cat.icons.filter(n => !q || n.toLowerCase().includes(q) || toPascalCase(n).toLowerCase().includes(q)),
  })).filter(cat => cat.icons.length > 0)

  const totalVisible = filtered.reduce((sum, cat) => sum + cat.icons.length, 0)

  return (
    <div style={{
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#fff',
      minHeight: '100vh',
    }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#384352', marginBottom: 4 }}>Icon library</h1>
      <p style={{ fontSize: 14, color: '#576A84', marginBottom: 32, lineHeight: 1.6, maxWidth: 600 }}>
        Lucide glyphs across {ICON_CATEGORIES.length} categories, rendered at 20×20 with a 1.5px stroke.
        Click any icon to copy its component name. Consistent weight and grid keep icons legible at every size.
      </p>

      {/* Search bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <div style={{
          flex: 1, maxWidth: 360,
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#F4F7FA', border: '1px solid #D8E3EE',
          borderRadius: 8, padding: '8px 14px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8DA4BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search icons…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontSize: 13, color: '#384352', fontFamily: 'inherit', width: '100%',
            }}
          />
        </div>
        <span style={{ fontSize: 12, color: '#8DA4BE' }}>{totalVisible} icons</span>
      </div>

      {/* Categories */}
      {filtered.map(cat => (
        <div key={cat.name} style={{ marginBottom: 40 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: '#6E8AAB',
            paddingBottom: 10, borderBottom: '1px solid #D8E3EE', marginBottom: 12,
          }}>
            {cat.name}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(84px, 1fr))',
            gap: 8,
          }}>
            {cat.icons.map(name => {
              const Icon = getIcon(name)
              const isCopied = copied === name
              return (
                <button
                  key={name}
                  onClick={() => handleCopy(name)}
                  title={`Copy "${name}"`}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', gap: 7, padding: '12px 8px',
                    background: isCopied ? '#E8F0FC' : '#F4F7FA',
                    border: `1px solid ${isCopied ? '#A4C7F4' : '#D8E3EE'}`,
                    borderRadius: 8, cursor: 'pointer',
                    transition: 'all 0.12s',
                    minWidth: 0,
                  }}
                  onMouseEnter={e => {
                    if (!isCopied) {
                      (e.currentTarget as HTMLButtonElement).style.background = '#E8F0FC'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#A4C7F4'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isCopied) {
                      (e.currentTarget as HTMLButtonElement).style.background = '#F4F7FA'
                      ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#D8E3EE'
                    }
                  }}
                >
                  {Icon ? (
                    <Icon size={20} strokeWidth={1.5} color={isCopied ? '#1960BD' : '#576A84'} />
                  ) : (
                    <div style={{ width: 20, height: 20, background: '#D8E3EE', borderRadius: 4 }} />
                  )}
                  <span style={{
                    fontSize: 9, color: isCopied ? '#1960BD' : '#8DA4BE',
                    fontFamily: 'monospace', textAlign: 'center', lineHeight: 1.3,
                    wordBreak: 'break-all', fontWeight: isCopied ? 700 : 400,
                  }}>
                    {isCopied ? 'copied!' : name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#8DA4BE' }}>
          <p style={{ fontSize: 14 }}>No icons match "{search}"</p>
        </div>
      )}
    </div>
  )
}

export const AllIcons: Story = {
  name: 'Icon Library',
  render: () => <IconGrid />,
}
