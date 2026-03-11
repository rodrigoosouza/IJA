import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { briefingSections, type BriefingData } from './briefing-sections'

export function generateBriefingPDF(data: BriefingData) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = doc.internal.pageSize.getWidth()
  const margin = 20
  let y = 20

  // Header bar
  doc.setFillColor(17, 24, 39)
  doc.rect(0, 0, pageW, 42, 'F')
  doc.setFillColor(234, 88, 12)
  doc.rect(0, 42, pageW, 3, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('BRIEFING ESTRATÉGICO', margin, 20)

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text(data.nome_empresa || 'Empresa', margin, 30)

  const dateStr = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
  doc.setFontSize(9)
  doc.text(dateStr, pageW - margin, 30, { align: 'right' })

  doc.setTextColor(0, 0, 0)
  y = 55

  // Info banner
  doc.setFillColor(254, 243, 199)
  doc.roundedRect(margin, y, pageW - margin * 2, 14, 2, 2, 'F')
  doc.setFontSize(9)
  doc.setTextColor(146, 64, 14)
  doc.text('📋 Este documento contém as respostas do briefing estratégico. Use estas informações para criar', margin + 4, y + 5)
  doc.text('a estratégia de marketing completa: ICP, posicionamento, site, blog, anúncios e emails.', margin + 4, y + 10)
  y += 22

  // Sections
  briefingSections.forEach((section) => {
    const answeredQs = section.questions.filter(q => data[q.key]?.trim())
    if (answeredQs.length === 0) return

    // Check page break
    if (y > 250) {
      doc.addPage()
      y = 20
    }

    // Section header
    doc.setFillColor(249, 250, 251)
    doc.roundedRect(margin, y, pageW - margin * 2, 10, 1, 1, 'F')
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(17, 24, 39)
    doc.text(`${section.icon}  ${section.title}`, margin + 4, y + 7)
    y += 14

    // Questions table
    const tableData = answeredQs.map(q => [q.label, data[q.key] || ''])

    autoTable(doc, {
      startY: y,
      head: [],
      body: tableData,
      margin: { left: margin, right: margin },
      theme: 'plain',
      styles: {
        fontSize: 9,
        cellPadding: { top: 3, bottom: 3, left: 4, right: 4 },
        lineWidth: 0.1,
        lineColor: [229, 231, 235],
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 55, textColor: [75, 85, 99] },
        1: { cellWidth: 'auto', textColor: [17, 24, 39] },
      },
      didDrawPage: () => {},
    })

    y = (doc as any).lastAutoTable.finalY + 10
  })

  // Footer on last page
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFillColor(17, 24, 39)
    doc.rect(0, doc.internal.pageSize.getHeight() - 12, pageW, 12, 'F')
    doc.setFontSize(7)
    doc.setTextColor(156, 163, 175)
    doc.text('Instituto João Alves — Consultoria Empresarial', margin, doc.internal.pageSize.getHeight() - 4)
    doc.text(`Página ${i} de ${totalPages}`, pageW - margin, doc.internal.pageSize.getHeight() - 4, { align: 'right' })
  }

  const fileName = `briefing-${(data.nome_empresa || 'empresa').toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().slice(0, 10)}.pdf`
  doc.save(fileName)
}
