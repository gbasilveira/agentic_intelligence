"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Save, Download, Plus, Trash2, Edit, Check, X } from "lucide-react"

interface EventNotesProps {
  eventId: string
}

export default function EventNotes({ eventId }: EventNotesProps) {
  // In a real app, these would be loaded from a database
  const [notes, setNotes] = useState<{ id: string; title: string; content: string; tags: string[]; date: string }[]>([
    {
      id: "note1",
      title: "Workshop Introduction",
      content:
        "Key points from the introduction:\n- Autonomous agents combine perception, reasoning, and action\n- Different from traditional ML models that only make predictions\n- Examples: personal assistants, healthcare monitoring, financial analysis",
      tags: ["introduction", "concepts"],
      date: "June 15, 2025",
    },
  ])

  const [activeNote, setActiveNote] = useState<string | null>(notes.length > 0 ? notes[0].id : null)
  const [editMode, setEditMode] = useState(false)
  const [editTitle, setEditTitle] = useState("")
  const [editContent, setEditContent] = useState("")
  const [editTags, setEditTags] = useState("")
  const [newTagInput, setNewTagInput] = useState("")

  const handleNewNote = () => {
    const newNote = {
      id: `note${Date.now()}`,
      title: "Untitled Note",
      content: "",
      tags: [],
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    }
    setNotes([...notes, newNote])
    setActiveNote(newNote.id)
    setEditMode(true)
    setEditTitle(newNote.title)
    setEditContent(newNote.content)
    setEditTags("")
  }

  const handleEditNote = () => {
    const note = notes.find((n) => n.id === activeNote)
    if (note) {
      setEditMode(true)
      setEditTitle(note.title)
      setEditContent(note.content)
      setEditTags(note.tags.join(", "))
    }
  }

  const handleSaveNote = () => {
    setNotes(
      notes.map((note) => {
        if (note.id === activeNote) {
          return {
            ...note,
            title: editTitle,
            content: editContent,
            tags: editTags
              .split(",")
              .map((tag) => tag.trim())
              .filter((tag) => tag),
          }
        }
        return note
      }),
    )
    setEditMode(false)
  }

  const handleCancelEdit = () => {
    setEditMode(false)
  }

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== activeNote)
    setNotes(updatedNotes)
    setActiveNote(updatedNotes.length > 0 ? updatedNotes[0].id : null)
    setEditMode(false)
  }

  const handleAddTag = () => {
    if (newTagInput.trim()) {
      setEditTags(editTags ? `${editTags}, ${newTagInput.trim()}` : newTagInput.trim())
      setNewTagInput("")
    }
  }

  const activeNoteData = notes.find((note) => note.id === activeNote)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Notes List */}
      <div className="lg:col-span-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold font-poppins">My Notes</h3>
          <Button variant="outline" size="sm" onClick={handleNewNote} className="gap-1 font-poppins">
            <Plus className="h-4 w-4" />
            <span>New Note</span>
          </Button>
        </div>

        <div className="space-y-3 mb-6">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Card
                key={note.id}
                className={`cursor-pointer transition-all duration-300 hover:border-primary/30 ${
                  activeNote === note.id
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/50 bg-card/30 backdrop-blur-sm"
                }`}
                onClick={() => {
                  if (!editMode) setActiveNote(note.id)
                }}
              >
                <CardContent className="p-4">
                  <h4 className="font-medium mb-1 font-poppins">{note.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2 font-roboto">{note.content}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {note.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs font-roboto">
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs font-roboto">
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground font-roboto">{note.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground mb-4 font-roboto">No notes yet</p>
              <Button variant="outline" size="sm" onClick={handleNewNote} className="font-poppins">
                Create Your First Note
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start gap-2 font-poppins">
            <Download className="h-4 w-4" />
            <span>Export All Notes</span>
          </Button>
        </div>
      </div>

      {/* Note Editor */}
      <div className="lg:col-span-2">
        {activeNoteData ? (
          <Card className="border border-border/50 bg-card/30 backdrop-blur-sm h-full">
            <CardContent className="p-6 h-full flex flex-col">
              {editMode ? (
                // Edit Mode
                <>
                  <div className="mb-4">
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Note Title"
                      className="text-lg font-medium mb-2 font-poppins"
                    />
                  </div>

                  <Textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    placeholder="Write your notes here..."
                    className="flex-1 min-h-[300px] resize-none mb-4 font-roboto"
                  />

                  <div className="mb-4">
                    <label className="text-sm font-medium mb-2 block font-poppins">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {editTags.split(",").map(
                        (tag, index) =>
                          tag.trim() && (
                            <Badge key={index} variant="secondary" className="font-roboto">
                              {tag.trim()}
                            </Badge>
                          ),
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        placeholder="Add a tag"
                        className="font-roboto"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            handleAddTag()
                          }
                        }}
                      />
                      <Button type="button" variant="outline" onClick={handleAddTag} className="shrink-0 font-poppins">
                        Add
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 font-roboto">Separate multiple tags with commas</p>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleCancelEdit} className="gap-1 font-poppins">
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </Button>
                    <div className="space-x-2">
                      <Button variant="destructive" onClick={handleDeleteNote} className="gap-1 font-poppins">
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </Button>
                      <Button onClick={handleSaveNote} className="gap-1 font-poppins">
                        <Check className="h-4 w-4" />
                        <span>Save</span>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                // View Mode
                <>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-poppins">{activeNoteData.title}</h3>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" onClick={handleEditNote} className="gap-1 font-poppins">
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1 font-poppins">
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1">
                      {activeNoteData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-roboto">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-roboto">{activeNoteData.date}</span>
                  </div>

                  <div className="flex-1 overflow-auto whitespace-pre-wrap font-roboto">
                    {activeNoteData.content || (
                      <p className="text-muted-foreground italic">No content yet. Click Edit to add content.</p>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="h-full flex items-center justify-center border border-dashed border-border rounded-lg p-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-4 font-roboto">Select a note or create a new one</p>
              <Button variant="outline" onClick={handleNewNote} className="gap-1 font-poppins">
                <Plus className="h-4 w-4" />
                <span>New Note</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
